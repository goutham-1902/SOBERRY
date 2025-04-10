import {useState, useEffect} from 'react'

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [musicData, setMusicData] = useState([]);

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    useEffect(() => {
        getMusic();
        
      }, []);

    async function getMusic() {
        try {
            const { data, error } = await supabase.from("Music").select();
            if (error) throw error;
            setMusicData(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching music data:", error);
        }
      }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}