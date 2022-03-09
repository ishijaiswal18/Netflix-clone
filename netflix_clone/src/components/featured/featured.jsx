import { InfoOutlined, PlayArrow} from '@material-ui/icons';
import './featured.scss';
import axios from "axios";
import { useEffect, useState } from "react";

const Featured = (props) => {
    let type = props.type;
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
        try {
            const res = await axios.get(`/movies/random?type=${type}`, {
            headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjdiMzgzNWJjNDQxZGVkOGRmYjc1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjgzMjkwOCwiZXhwIjoxNjQ3MjY0OTA4fQ.0sUggW73-6GS2zQFo905wgHWf1CTAyUKlaVzbbHMXPk",
            },
            });
            setContent(res.data[0]);
            // console.log("helloooooooooooooooo");
            // console.log(res.data[0]);
        } catch (err) {
            console.log(err);
        }
        };
        getRandomContent();
    }, [type]);
    // console.log(content);

    const changeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        props.setGenre(e.target.value);
    };

    return (
        <div className = "featured">
            {type && (
                <div className = "category">
                    <span>{type === 'movies' ? "Movies" : 'TV Series'}</span>
                    <select name = "genre" id = 'genre' onChange = {changeHandler}>
                        <option value = "">All</option>
                        <option value = "action">Action</option>
                        <option value = "comedy">Comedy</option>
                        <option value = "drama">Drama</option>
                        <option value = "horror">Horror</option>
                        <option value = "romance">Romance</option>
                        <option value = "thriller">Thriller</option>
                        <option value = "sci-fi">Sci-Fi</option>
                        <option value = "animation">Animation</option>
                        <option value = "adventure">Adventure</option>
                        <option value = "crime">Crime</option>
                        <option value = "documentary">Documentary</option>
                        <option value = "family">Family</option>
                        <option value = "fantasy">Fantasy</option>
                        <option value = "history">History</option>
                        <option value = "mystery">Mystery</option>
                        <option value = "war">War</option>
                        <option value = "western">Western</option>
                        <option value = "musical">Musical</option>
                        <option value = "sport">Sport</option>
                        
                    </select>
                </div>
            )}
            
            <img 
                width = "100%"
                src = {content.img}
                alt = "" 
            />
            <div className = "info">
                <img 
                    src= "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                />
                <span className = "desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;

