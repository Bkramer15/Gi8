function createPatient(name, ssn) {
    // Private data
    const PII = {
        name: name,
        ssn: ssn
    };

    // Public functions to access data
    return {
        getName: function() {
            return PII.name;
        },
        getSSN: function() {
            return undefined; // Not accessible
        }
    };
}

// Creating a patient object
const patient2 = createPatient('John', '123-45-6789');

// Output: Undefined
console.log(patient2.name); // Undefined
console.log(patient2.ssn); // Undefined

// Output: John
console.log(patient2.getName()); // John

// Output: Undefined
console.log(patient2.getSSN()); // Undefined
