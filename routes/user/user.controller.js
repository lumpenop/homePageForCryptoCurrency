const {Join} = require('../../models/index');

let login = (req,res) =>{
    res.render('./user/login.html');
}

let signUp= (req,res) =>{
    res.render('./user/signup_agree.html');
}
//post
let signupForm = async(req,res) =>{
    let flag = req.body.chk[2];
    console.log(flag);
    res.render('./user/signup_form.html',{
        chk:flag
    })
}
//post
let signSuccess = async(req,res) =>{
    let email = req.body.email;
    let pw = req.body.password;
    let gender = req.body.gender;
    let birthnumber = req.body.birth;
    let name = req.body.name;
    let add_option = req.body.add_option;

    try{
        let rst = await Join.create({
            email,pw,gender,name,add_option,birth:birthnum
        })
    }catch(e){
        console.log(e);
    }


    res.render('./user/signup_success.html');
}

let findPw = (req,res) =>{
    res.render('./user/find_pw.html');
}

//post
let pwSuccess = (req,res) =>{
    res.render('./user/find_pw_success.html',{

    })
} 



/*
let login_check = async (req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let result = await User.findOne({
        where:{userid, userpw }//res.redirect();//다시 처음 index로 가게됨
    })
    
    if(result == null){
        //로그인실패
        res.redirect('/user/login?flag=0');
    }else{
    req.session.uid = userid;
    req.session.isLogin = true;
    //전체적 서버에서 공통적으로 쓰는 변수가 됨. uid, isLogin

    req.session.save(()=>{
        res.redirect('/');
        })
    }
}

let logout = async(req,res)=>{
    //req.session.destroy(()=>{
    //    res.redirect('/');
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/');
    })
}


let userid_check = async(req,res) =>{
    let userid = req.query.userid;
    let flag = false;
    let result = await User.findOne({
        where:{userid}
    })
    
    //result==undefined>>생성가능
    //result != undefined 생성불가능
    if(result == undefined){
        flag = true;//생성가능
    } else{
        flag = false;
    } 
    res.json({login:flag, userid,})
}
*/
module.exports={
    login,signUp,signupForm,signSuccess,findPw,pwSuccess,
}

//fighiting;;