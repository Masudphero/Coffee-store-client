import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import photo from "../assets/hhhhhh.jpeg"

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Form sign up", email, password);

   
        createUser(email, password)
        .then(result=>{
            console.log("user created at fb",result.user);
            const createdAt=result?.user?.metadata?.creationTime;

            const newUser={name, email,createdAt}
        
            //  save new user info to the database
            fetch("https://masud-eta.vercel.app/users",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(newUser)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log("user created to db",data);
            })
       




        })
        .catch(error=>{
            console.log("error",error)
        })
            
    };

    return (
        <div  style={{
    
            height:"50rem",
            backgroundImage:`url(${photo})`,
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            
         }} className="hero justify-center container mx-auto items-center bg-base-200">
            <div >
                <div>
                 <div>
                <div className="card m-auto mt-7  lg:w-96 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up or egister</button>
                        </div>
                        <p>coffee test: <Link to="/signin" className='font-bold text-blue-500'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
                 </div>
                </div>
                
    );
};

export default SignUp;
