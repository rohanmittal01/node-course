const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const upload = multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(request, file, callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return callback(new Error('Only .png, .jpg, .jpeg files can be uploaded'))
        }
        callback(undefined,true)

    }
})

//////Get User Avatar/////////
router.get('/users/:id/avatar',async (request,response)=>{
    try{
        const user = await User.findById(request.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }
        response.set('Content-type','image/png')
        response.send(user.avatar)
    }catch(error){
        response.status(404).send()
        
    }
})
///////Delete User Avatar//////

router.delete('/users/me/avatar',auth,async (request,response)=>{
     request.user.avatar = undefined
     await request.user.save()
    response.send(request.user)
})
///////UPLOAD User Avatar///////
router.post('/users/me/avatar',auth,upload.single('avatar'),async (request,response)=>{
    const buffer = await sharp(request.file.buffer).resize({width:250, height:250}).png().toBuffer()
    request.user.avatar = buffer
    await request.user.save()
    response.send(request.user)
},(error, request, response, next)=>{
    response.status(400).send({error:error.message})
})

////////////LOGIN//////////////////
router.post('/users/login',async (request,response)=>{
    
    try{
        const user = await User.findByCredentials(request.body.email,request.body.password)
        const token = await user.generateAuthToken()
        response.send({user: user.getPublicProfile(),token})
    }catch(error){
        response.status(400).send(error)
    }
})

////////LOGOUT///////////////
router.post('/users/logout',auth,async (request,response)=>{
    try{
        request.user.tokens = request.user.tokens.filter((token)=>{
            return token.token !== request.token
        })
        await request.user.save()
        response.send()
    }catch(error){
        request.status(500).send()
    }
})

///////LOGOUT ALL///////////
router.post('/users/logoutAll',auth,async (request,response)=>{
    try{
        request.user.tokens = []
        await request.user.save()
        response.send()
    }catch(error){
        response.status(500).send(error)
    }
})
////Create User///////
router.post('/users',async (request,response)=>{
    const user = new User(request.body)
    // user.save().then(()=>{
    //     response.status(201).send(user)
    // }).catch((error)=>{
    //     response.status(400).send(error) //check on httpstatuses.com

    // })
    try{
      await user.save()
      const token = await user.generateAuthToken()
      response.status(201).send({user,token})
    }catch(error){
        response.status(400).send(error)
    }
})


////////Find current users details///////
router.get('/users/me',auth,async (request,response)=>{
    // User.find({}).then((users)=>{
    //     response.send(users)
    // }).catch((error)=>{
    //     response.status(500).send()
    // })
    response.send(request.user)
    // try{
    //     const users = await User.find({})
    //     response.send(users)
    // }catch(error){
    //     response.status(500).send(error)
    // }
    
})


// //////Find user by id///////////
// router.get('/users/:id',async (request,response)=>{
//     const _id = await request.params.id
//     // User.findById(_id).then((user)=>{
//     //     if(!user){
//     //         return response.status(404).send()
//     //     }
//     //     response.send(user)
//     // }).catch((error)=>{
//     //     response.status(500).send()
//     // })

//     try{
//         const user = await User.findById(_id)
//         if(!user){
//             return response.status(404).send()
//         }
//         response.send(user)
//     }catch(error){
//         response.status(500).send()
//     }
// })

//////Find and Update User///////////
router.patch('/users/me',auth,async (request,response)=>{
    const updates = Object.keys(request.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return response.status(404).send('error: Invalid updates')
    }
    try{
       // const user = await User.findById(request.params.id)
        updates.forEach((update)=>{
            request.user[update] = request.body[update]
        })
        await request.user.save()

       //const user = await User.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
        // if(!user){
        //     return response.status(404).send()
        // }
        response.send(request.user)
    }catch(error){
        response.status(400).send(error)
    }
})


/////////Find and Delete User////////
router.delete('/users/me',auth,async (request,response)=>{
    try{
        // const user = await User.findByIdAndDelete(request.user._id)
        // if(!user){
        //     return response.status(404).send()
        // }
        await request.user.remove()
        response.send(request.user)
    }catch(error){
        response.status(500).send(error)
    }
})


module.exports = router