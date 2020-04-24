import React,{useState} from 'react';


const LogIn = ({userData,changeUserData}) =>{
    const [formData,changeFormData] = useState({userName:'',password:''});
    const [error,setError] = useState({userName:false,password:false})

    const onDataChange = evt =>{
        const {target} = evt;
        changeFormData({...formData,[target.id]:target.value});
        setError({userName:false,password:false});
    }

    const checkUserData = () =>{
        console.log(userData,formData);
        
        if(userData.userName!==formData.userName){
            setError({...error,userName:true});
            return false;
        }
        if(userData.password!==formData.password){
            setError({...error,password:true});
            return false;
        }
        changeUserData({...userData,loged:true});
    }

    return (<div className="card w-100" style={{maxWidth: '800px'}}>
        <div className="card-body">
            <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control" id="userName" onChange={e=>onDataChange(e)} />
                {error.userName && <small className="form-text text-muted">El usuario está mal!</small>}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="password" onChange={e=>onDataChange(e)} />
                {error.password && <small className="form-text text-muted">El password está mal!</small>}
            </div>
            <hr/>
            <button type="submit" className="btn btn-primary w-100" onClick={checkUserData}>Submit</button>
        </div>
    </div>)
}

export default LogIn;