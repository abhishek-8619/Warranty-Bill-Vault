const multer=require('multer')
const path=require('path')
const uploadPath = path.join(__dirname, '../uploads');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath)
    },
    filename:(req,file,cb)=>{
        const filename_DB=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`
        cb(null,filename_DB)
    }
})

const upload=multer({storage,
    fileFilter:(req,file,cb)=>{
        const ext=path.extname(file.originalname)
        if(ext!='.jpg'&& ext!='.jpeg'&& ext!='.png'){
            return cb(new Error("Only images are accepted"))
        }
        return cb(null,true)
    },
    limits:{
        fileSize:1500000
    }
})

module.exports=upload