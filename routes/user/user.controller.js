const {Join} = require('../../models/index');

let login = (req,res) =>{
    console.log('router,,22')
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
    let name = req.body.user_name;
    let add_option = req.body.add_option;
    let phonenum1 = req.body.phone_num[0];
    let phonenum2 = req.body.phone_num[1];
    let phonenum3 = req.body.phone_num[2];
    let phonenum = phonenum1+phonenum2+phonenum3;
    console.log(phonenum);


    try{
        let rst = await Join.create({
            email,pw,gender,name,add_option,contact:phonenum,birth:birthnumber
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

let info = async(req,res) =>{
    let userList= await Join.findAll({});
     res.render('./user/info.html',{
         userList,
    });
}

let idCheck = async(req,res)=>{
    let idFlag = false;
    let email = req.body.email;
    let result = await Join.findOne({
        where:{email}
    });
    if (result ==undefined) idFlag= true;
    res.json({check:idFlag});
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
    login,signUp,signupForm,signSuccess,findPw,pwSuccess,info,idCheck,
}

//fighiting;;