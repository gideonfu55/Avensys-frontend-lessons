import { useState, useMemo } from "react"

// Fundamental Rule in React:-

// Change in state of a Component, will make the Component to 
// re-render again or re-execute again

function Launch() 
{

    console.log("*******************************************")

    const [ number, setNumber ] = useState(0)

    const [ enteredName, setEnteredName ] = useState("")

    // enteredName = "Raju"

    function cube(num)// num = 10
    {
        let i = 0
        let anotherNum
        while(i < 1000000000)
        {
            anotherNum = num * num * num
            i++
        }        
        return anotherNum
        // Logic to find the cube of number
    }
let result = useMemo(function()
    {
       return cube(number)
    }, [number])

    // const result = cube(number)// cube(0)

    function increaseIt()
    {
        setNumber(number + 1)
    }

    function decreaseIt()
    {
        setNumber(number - 1)
    }

    function collectIt(event)
    {
        setEnteredName(event.target.value)

        // setEnteredName("Raju")
    }
return (
        <div>
            <h2>The Number is: {number} and its cube is: {result}</h2>
            <button onClick={increaseIt}>Increase</button>
            <button onClick={decreaseIt}>Decrease</button>
            <hr />

            <h2>The Name is: {enteredName}</h2>
            Enter Name:<input type="text" onChange={collectIt}/>
        </div>
    )
}

export default Launch