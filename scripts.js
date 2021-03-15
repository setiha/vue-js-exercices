let app = new Vue({
    el: 'main#app',
    data: {
        pageTitle: 'Osztalynaplo',
        studentCollection: [
            {name: "Anna", gender: "lany"},
            {name: "Joska", gender: "fiu"},
            {name: "Panna", gender: "lany"},
            {name: "Istvan", gender: "fiu"},
            {name: "Olga", gender: "lany"}
        ],
        newStudent: {
            name: '',
            gender: ''
        }
    },
    methods: {
        AddNewStudent() {
            if (!this.newStudent) {
                return;
            }
            this.studentCollection.push(this.newStudent);
            this.newStudent = {name: '', gender: ''};
        },
        GetColor: function (student) {
            let backgroundColor = student.gender === 'fiu' ? 'blue' : 'red';
            return {
                color: 'white',
                backgroundColor: backgroundColor

            }
        }
    }
});