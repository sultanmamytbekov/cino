import axios from 'axios';
import { useEffect, useState }  from 'react';
import React from 'react';
import { API_KEY } from './API_REY';
import { useParams } from 'react-router-dom';
import './person.scss'
import ActorMovie from './ActorMovie';


const Person = ({color , setColor}) => {
    const [person , setPerson] = useState({})
    const {person_id} = useParams()
   const [hamber , setHamber] = useState(false)


    function getPerson(){
        axios(`https://api.themoviedb.org/3/person/${person_id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            setPerson(res.data)
        })
    }
    let {
        biography,
        profile_path,
        birthday,

        name
    } = person
    useEffect(() => {
        getPerson()
    }, [])
    const arr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique porro cum iure nobis saepe adipisci aspernatur quia. Iure vero doloribus doloremque dolore fugiat pariatur eum sint id necessitatibus officia, laboriosam voluptate, odit quis? Cupiditate eos necessitatibus voluptatem enim nesciunt repellat corrupti animi nulla exercitationem voluptate ipsam, totam, nisi eum deserunt fuga quia blanditiis, doloribus eius maxime. Voluptatibus eius alias consequatur est repudiandae id, dolorum natus molestiae minus maxime, fuga quasi qui provident, tempore architecto aspernatur dolorem. Earum quidem vero, ipsum cum incidunt ratione autem. Totam eum ut nisi obcaecati odit officia minus animi veniam ratione, facere deserunt? Adipisci dolorum impedit earum voluptates veritatis dolorem consequuntur quasi cumque tempora, aspernatur beatae exercitationem neque, dignissimos deserunt fugiat? Laudantium, quisquam! Architecto corporis magni quidem modi perspiciatis quia, suscipit laudantium, cumque ratione, eius commodi deserunt ea labore incidunt enim ut nemo? Reiciendis aspernatur corporis dolor sed obcaecati, dolores aliquid veniam dignissimos consequuntur veritatis ab quos. Corrupti illum error reprehenderit iure consequuntur totam cumque, quisquam nobis, dolorum nesciunt voluptatum voluptate ipsum, doloribus hic! Commodi soluta nisi quod cupiditate error vel accusantium id, vero, asperiores quas velit nihil sapiente sunt molestias sint explicabo aliquid officiis! At rerum omnis doloribus quam itaque doloremque minus neque. Accusantium.'
    return (
        <div style={{background:color ? 'black' : '' , transition:'4s'}} id="Person">
            <div className="container">
                <div className="Person">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt="" />
                    <div>
                        <h1 style={{color:color ? 'white' : ''}}>{name}</h1>
                        <h3 style={{color:color ? 'white' : ''}}>{birthday}</h3>
                    <p style={{display:biography ? 'block' : 'none' , color:color ? 'white' : ''}}>{biography?.slice(0,hamber ? 100000 : 300) }</p>
                    <p style={{display:biography ? 'none' : 'block' , color:color ? 'white' : ''}}>{arr?.slice(0,hamber ? 100000 : 300)}</p>
                        <p className='Person--p' style={{cursor:'pointer', marginTop:'-15px', margin:'-20px 0 0 0 ', width:'60px' , color:color ? 'white' : ''}} onClick={() => {
                            setHamber(!hamber)
                        }}>{hamber ? 'Закрыть' : 'Читать'}</p>
                    </div>
               
                </div>
                
            </div>
            <ActorMovie/>
        </div>
    );
};  

export default Person;