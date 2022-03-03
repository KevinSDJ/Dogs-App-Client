import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Alerts from '../../../components/utilities/formalerts';
import './create.scss';
import axios from 'axios'
import { useNavigate } from 'react-router';
import { getAlldogs, setDogsUse,setTemperaments} from '../../../redux/actions/actionsF';
import { filtTxt } from '../../../components/utilities/txtfilt';
import TopNavBack from '../../../components/Nav/topbarback.jsx'

export default function Create() {
    let dispatch = useDispatch()
    let [next,setNext]=useState(false)
    let navigate = useNavigate()
    const temps = useSelector(state => state.temperaments)
    const [name, setName] = useState("")
    const [height, setHeight] = useState({
        min: "",
        max: ""
    });
    const [weight, setWeight] = useState({
        min: "",
        max: ""
    })
    const [years, setYears] = useState({
        min: "",
        max: ""
    })
    const [temperaments, setTemp] = useState({
        temp: []
    })
    const [imag, setImage] = useState({
        url: ""
    })
    function handlechange(e) {
        if (e.target.className === "height") {
            Number(e.target.value) < 100 && setHeight(prev => { return { ...prev, [e.target.name]: e.target.value } })
        } else if (e.target.className === "name") {
            (e.target.value.length < 30) && setName(e.target.value)
        } else if (e.target.className === "weight") {
            Number(e.target.value) < 100 && setWeight(prev => { return { ...prev, [e.target.name]: e.target.value } })
        } else if (e.target.className === "years") {
            Number(e.target.value) < 18 && setYears(prev => { return { ...prev, [e.target.name]: e.target.value } })
        } else if (e.target.className === "temperaments") {
            setTemp(prev => {
                return { ...prev, temp: [...temperaments.temp, Number(e.target.value)] }

            })
        } else if (e.target.className === "fc_Image") {
            setImage(pre => {
                return { ...pre, url: e.target.value }
            })
        }
    }
    function onsubmit(e) {
        e.preventDefault()
        let d = {
            name: filtTxt(name),
            height: `${height.min}-${height.max}`,
            weight: `${weight.min}-${weight.max}`,
            age: `${years.min}-${years.max}`,
            temperaments: temperaments.temp,
            image: imag.url
        }

        axios.post('https://ksdj-dogs-api.herokuapp.com/dog', d, { withCredentials: true })
            .then(r => {
                setName("")
                setHeight(prev => { return { ...prev, min: "", max: "" } })
                setWeight(prev => { return { ...prev, min: "", max: "" } })
                setYears(prev => { return { ...prev, min: "", max: "" } })
                setTemp(prev => { return { ...prev, temp: [] } })
                setImage(prev => { return { ...prev, url: "" } })
                dispatch(getAlldogs())
                dispatch(setTemperaments())
                setTimeout(() => {
                    dispatch(setDogsUse())
                }, (2000))
            })
    }
    function add(e) {
        setTemp(prev => {
            return { ...prev, temp: [...temperaments.temp,document.getElementById("addTemp").value] }
        })
        setTimeout(() => { document.getElementById("addTemp").value = "" }, (1000))
    }
    function remove(e) {
        setTemp(prev => {
            return { ...prev, temp: temperaments.temp.filter(i => Number(e.target.id)!== Number(i))}
        })
    }
    return (
        <div id="createContent">
           <TopNavBack/>
                <form onSubmit={onsubmit} autoComplete="off">
                    <fieldset className="fieldset">
                        <legend>Create a New Breed</legend>
                        {!next?<section>
                            <label className="labels">
                                <span>{!name ? <Alerts msg="empty name field" type="warning" /> : Number(name) ? <Alerts msg="name must be a string" type="warning" /> : <Alerts msg="OK" type="succes" />}</span>
                                Name
                                <input className="name" name="name" type="text" onChange={handlechange} placeholder="name" value={name} required />
                            </label>

                            <label className="labels">
                                <span>{height.max && !height.min ? <Alerts msg="the minimum field is missing" type="warning" /> : !height.max && height.min ? <Alerts msg="the maximum field is missing" type="warning" /> : height.max && height.min ? <Alerts msg="OK" type="succes" /> : <Alerts msg="both fields must be completed" type="warning" />}</span>
                                Height
                                <input className="height" min="1" max="100" type="number" name="min" value={height.min} onChange={handlechange} placeholder="min" required />
                                <input className="height" min="1" max="100" type="number" name="max" value={height.max} onChange={handlechange} placeholder="max" required />
                            </label>

                            <label className="labels">
                                <span>{weight.max && !weight.min ? <Alerts msg="the minimum field is missing" type="warning" /> : !weight.max && weight.min ? <Alerts msg="the maximum field is missing" type="warning" /> : weight.max && weight.min ? <Alerts msg="OK" type="succes" /> : <Alerts msg="both fields must be completed" type="warning" />}</span>
                                Weight
                                <input className="weight" min="1" max="100" type="number" name="min" value={weight.min} onChange={handlechange} placeholder="min" required />
                                <input className="weight" min="1" max="100" type="number" name="max" value={weight.max} onChange={handlechange} placeholder="max" required />
                            </label>

                            <label className="labels">
                                <span>{years.max && !years.min ? <Alerts msg="the minimum field is missing" type="warning" /> : !years.max && years.min ? <Alerts msg="the maximum field is missing" type="warning" /> : years.max && years.min ? <Alerts msg="OK" type="succes" /> : <Alerts msg="both fields must be completed" type="warning" />}</span>
                                Age
                                <input className="years" min="1" max="17" type="number" name="min" value={years.min} onChange={handlechange} placeholder="min" required />
                                <input className="years" min="1" max="17" type="number" name="max" value={years.max} onChange={handlechange} placeholder="max" required />
                            </label>
                        </section>:
                        <section>
                            <label className="labels">
                                Temperaments
                                <div id="temps_preview">{temperaments?.temp.map(e => <li key={Number(e) ? temps[e].name : e} id={e} onClick={remove}>{Number(e) ? temps[e - 1].name : e}<span>x</span></li>)}</div>
                                <select className="temperaments" onChange={handlechange} required>
                                    {temps.length > 1 ? temps.map(e => <option key={e.id} value={e.id}>{e.name}</option>) : ""}
                                </select>
                                <input type="text" id="addTemp" name="temperament" placeholder="add new temperament" />
                                <button type="button" onClick={add}>add</button>

                            </label>
                            <hr />
                            <label className="labels">
                                Image
                                <input type="text" className="fc_Image" placeholder="url" onChange={handlechange} required />
                            </label>
                        </section>}                        
                        
                    </fieldset>
                    <div className="fc_btn_group">
                        {!next?<button className="fc_btn_cancel" onClick={() => navigate("/home")}>cancel</button>:<button id="btnBack" type="button" onClick={(e)=>setNext(!next)}>back</button>}
                        {next?<button className="fc_btn_create" type="submit">create</button>:<button id="btnNext" type="button" onClick={(e)=>setNext(!next)}>next</button>}
                    </div>

                </form>
        </div>)
}
