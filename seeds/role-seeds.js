const {Role} = require("../models")

const roleData = [
    {
        id: 1,
        role: "Inspected my truck daily to ensure that any mechanical problems were fixed before dirving.",
        ExperienceId: 1
    },
    {
        id: 2,
        role: "Maintained a log of working hours to be in compliance with state and federal laws.",
        ExperienceId: 1
    },
    {
        id: 3,
        role:"Secured cargo, made sure that it was balanced, and ensured that the overall weight of the truck didn't exceed federal regulations.",
        ExperienceId: 1
    },
    {
        id: 4,
        role:"Obeyed and followed local and federal traffic laws.",
        ExperienceId: 1
    },
    {
        id: 5,
        role:"Coordinated my schedule with dispatchers.",
        ExperienceId: 1
    },
    {
        id: 6,
        role:"Drove a Truck for pickup and deliveries anywhere in the lower 48 states.",
        ExperienceId: 1
    },
    {
        id: 7,
        role:"Assisted taxpayers with setting up installment agreements in order to settle their outstanding tax liability.",
        ExperienceId: 2
    },
    {
        id: 8,
        role:"Gave occasional classes on various procedures and command codes during team meetings.",
        ExperienceId: 2
    },
    {
        id: 9,
        role:"Responsible for taking notes during team meetings then typing out those notes for distribution among the team.",
        ExperienceId: 2
    },
    {
        id: 10,
        role:"Referred and or transfered callers to the appropriate area for resolution and closure of issues that are beyond the training and scope of the Contact Representative's position.",
        ExperienceId: 2
    },
    {
        id: 11,
        role:"Provided procedural explanations to specific inquiries initiated by the individual.",
        ExperienceId: 2
    },
    {
        id: 12,
        role:"Conducted telephone interviews with a wide range of individuals who have varying degrees of understanding of tax requirements.",
        ExperienceId: 2
    }
]

const seedRoles = () => Role.bulkCreate(roleData)

module.exports = seedRoles