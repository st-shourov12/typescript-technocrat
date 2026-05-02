type UserRole = 'admin' | 'user' | 'guest'

const getDashboard = (role : UserRole) => {
    if(role === 'admin'){
        return "Admin Dashboard"
    }else if (role === 'user') {
        return 'User Dashboard'
        
    }else{
        return 'Guest Dashboard'
    }
}

console.log(getDashboard("admin"));


// Intersection

type Employee = {
    id : string;
    name: string;
    phoneNo: string ;
};

type Manager = {
    designation : string ;
    teamSize : number;
}

type EmployeeManager = Employee & Manager ;
const Batpar : EmployeeManager = {
    id: '123',
    name: 'Cheater',
    designation : 'manager',
    teamSize : 5 + 2,
    phoneNo : '0190000'

};

console.log(Batpar)