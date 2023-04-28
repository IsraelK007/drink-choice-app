import React, { useState, useEffect } from 'react';
import { baseUrl, url, modelId, token, contentType } from "../utils/utils"
import '../index.css';
import Modal from './Modal';

function Form() {
    const [modelName, setModelName] = useState("")
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({})
    const [genders, setGenders] = useState([])
    const [cafeine, setCafeine] = useState([])
    const [time, setTime] = useState([])
    const [pregnant, setPregnant] = useState([])
    const [healthCounscious, setHealthCounscious] = useState([])

    useEffect(() => {
        const headers = {
            "Authorization": token,
            "Content-Type": contentType,
        };

        fetch(`${baseUrl}/${modelId}`, { headers })
            .then(response => response.json())
            .then((data) => {
                setModelName(data.data.attributes.name);
                setGenders(data.data.attributes.metadata.attributes[1].domain.values)
                setCafeine(data.data.attributes.metadata.attributes[3].domain.values)
                setTime(data.data.attributes.metadata.attributes[4].domain.values)
                setPregnant(data.data.attributes.metadata.attributes[5].domain.values)
                setHealthCounscious(data.data.attributes.metadata.attributes[6].domain.values)
            })
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        setInputs(inputs => { return { ...inputs, [e.target.name]: e.target.value } })
    }

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault()
        }

        const requestBody = {
            data: {
                type: "scenario",
                attributes: {
                    input: inputs
                }
            }
        };

        const requestOptions = {
            method: "post",
            headers: {
                "Authorization": token,
                "Content-Type": contentType,
            },
            body: JSON.stringify(requestBody)
        };

        fetch(`${url}/${modelId}`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setMessage(data.data.attributes.decision);
                setShow(true);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="relative">
                <div className="my-2 px-5">
                    <p>This is <span>{modelName}</span> </p>
                    <label htmlFor="INPUTVAR1" className="block font-bold mb-2">Temperature ?</label>
                    <input
                        type="number"
                        min="-10"
                        max="45"
                        className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                        name="INPUTVAR1"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder='From -10 to 45 degrees'
                        required
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR2" className="block font-bold mb-2">What is your gender ?</label>
                            <select name="INPUTVAR2" defaultValue="" placeholder="Gender"
                                className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                onChange={handleChange}
                                required>
                                <option value="" disabled>--Select an option --</option>
                                {genders.map((gender, index) => (
                                    <option key={index} value={gender}>
                                        {gender}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR3" className="block font-bold mb-2">How old are you ?</label>
                            <input
                                type="number"
                                min="1"
                                max="90"
                                className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                name="INPUTVAR3"
                                value={inputs.name}
                                onChange={handleChange}
                                placeholder="From 1 to 90 years old"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="my-2 px-5">
                    <label htmlFor="INPUTVAR4" className="block font-bold mb-2">Are you sensitive to cafeine ?</label>
                    <select name="INPUTVAR4" defaultValue="" placeholder="Sensitive to cafeine ?"
                        className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                        onChange={handleChange} required>
                        <option value="" disabled>-- Select an option --</option>
                        {cafeine.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR5" className="block font-bold mb-2">Time of day ?</label>
                            <select name="INPUTVAR5" defaultValue="" placeholder="Time of day ?"
                                className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                onChange={handleChange} required>
                                <option value="" disabled>-- Select an option --</option>
                                {time.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR6" className="block font-bold mb-2">Are you pregnant ?</label>
                            {inputs.INPUTVAR2 !== "Female" || "" ?
                                <select name="INPUTVAR6" defaultValue="" placeholder="Pregnant?"
                                    className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                    onChange={handleChange} required>
                                    <option value="" disabled>-- Select an option --</option>
                                    <option value="NA">NA</option>
                                </select> :
                                <select name="INPUTVAR6" defaultValue="" placeholder="Pregnant?"
                                    className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                    onChange={handleChange} required>
                                    <option value="" disabled>-- Select an option --</option>
                                    {pregnant.slice(0, -1).map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            }
                        </div>
                    </div>
                </div>
                <div className="my-2 px-5">
                    <label htmlFor="INPUTVAR7" className="block font-bold mb-2">Are you health conscious ? </label>
                    <select name="INPUTVAR7" defaultValue="" placeholder="Health conscious?"
                        className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                        onChange={handleChange} required>
                        <option value="" disabled>-- Select an option --</option>
                        {healthCounscious.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR8" className="block font-bold mb-2">Number of drink consumed per day? </label>
                            <input
                                type="number"
                                min="0"
                                max="20"
                                className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none focus:shadow-outline"
                                name="INPUTVAR8"
                                value={inputs.name}
                                onChange={handleChange}
                                placeholder="From 0 to 20 drinks... "
                                required
                            />
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-1 sm:col-span-2">
                        <div className="my-2 px-5">
                            <label htmlFor="INPUTVAR9" className="block font-bold mb-2">Number of drinks consumed today ? </label>
                            <input
                                type="number"
                                min="0"
                                max="20"
                                className="block w-full py-2 px-3 border border-gray-400 rounded-md mb-2 leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-700 focus:shadow-outline"
                                name="INPUTVAR9"
                                value={inputs.name}
                                onChange={handleChange}
                                placeholder="From 0 to 20 drinks... "
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-3 px-5">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                        PRECICT {modelName.toUpperCase()}
                    </button>
                </div>

                {show && <Modal show={show} message={message} model={modelName} />}

            </form>

        </>
    );
}

export default Form;
