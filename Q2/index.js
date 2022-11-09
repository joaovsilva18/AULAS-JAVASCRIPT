function checkdays() {
    const person = new Object()
    person.birthdate = new Date(document.getElementById("date").value)
    person.gender = document.getElementById("gender").value
    person.daysToDeath = daysToDeath()
    function daysToDeath() {
        const timeNow = ((((Date.now() / 1000) / 60) / 60) / 24).toFixed(0)

        const timeinput = ((((person.birthdate.getTime() / 1000) / 60) / 60) / 24).toFixed(0)

        const age = timeNow - timeinput

        if (person.gender === "Masc") {
            return 26681.5 - age
        }
        if (person.gender === "Femi") {
            return 29230.5 - age
        }
    }
    document.getElementById("result").innerHTML = "dias restantes de vida:" + (person.daysToDeath)
}


