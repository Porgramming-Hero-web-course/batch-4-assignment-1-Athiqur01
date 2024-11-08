//5.Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty =<P, Q extends keyof P>(person:P,property:Q ):P[Q]=>{
    return person[property]
    }

    const res5=getProperty({name:'Jaman',age:12},'age')
    console.log(res5)