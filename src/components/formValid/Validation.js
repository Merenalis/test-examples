import React, {useEffect, useState} from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLenError, setMinLenError] = useState(false)
    const [maxLenError, setMaxLenError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength': {
                    value.length < validations[validation] ? setMinLenError(true) : setMinLenError(false)
                    break
                }
                case 'isEmpty': {
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break
                }
                case 'maxLength': {
                    value.length > validations[validation] ? setMaxLenError(true) : setMaxLenError(false)
                    break
                }
                case 'emailValid': {
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)


                    break
                }
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLenError || minLenError || emailError) {
            setInputValid(false)
        } else
            setInputValid(true)
    }, [isEmpty, maxLenError, minLenError, emailError])
    return {
        isEmpty,
        minLenError,
        emailError,
        maxLenError,
        inputValid

    }
}
const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }


    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }

}

function Validation(props) {
    const email = useInput('', {isEmpty: true, minLength: 3, emailValid: true})
    const password = useInput('', {isEmpty: true, minLength: 5})


    return (

        <div>
            <form action="">
                <h1>Registration</h1>
                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>HUYLAN</div>}
                {(email.isDirty && email.minLenError) && <div style={{color: 'red'}}>HUYLAN na emayle 2.0</div>}
                {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>HUYLAN na emayle 3.0</div>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value}
                       name={'email'} type="text" placeholder={'Enter your email'}
                       style={{margin: 10}}/>
                <br/>
                {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>HUYLAN 2.0</div>}
                {(password.isDirty && password.minLenError) && <div style={{color: 'red'}}>HUYLAN na parole 2.0</div>}
                {(password.isDirty && password.minLenError) && <div style={{color: 'red'}}>HUYLAN na parole 2.0</div>}

                <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value}
                       name={'password'} type="text" placeholder={'Enter your password'}
                       style={{margin: 10}}/>

                <button disabled={!email.inputValid || !password.inputValid} type={"submit"}>Send</button>
            </form>


        </div>
    );
}

export default Validation;