import { useNavigate } from "react-router-dom";

const UseNavigate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/registration')}>Registration</button>
            <button onClick={() => navigate('/recover')}>Recover</button>
            <button onClick={() => navigate('/shop')}>Shop</button>
            <button onClick={() => navigate('/foxkit')}>Foxkit</button>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}
export default UseNavigate;
