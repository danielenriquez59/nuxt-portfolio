
<template>
    <AppSection>
        <h2>Professional Experience</h2>
        <TabView lazy class="shadow-md">
            <TabPanel v-for="(job, index) in jobs" :key="job" :header="job.role">
                <ScrollPanel class="px-5 h-72 custombar1">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 md:col-span-8">
                            <div class="flex gap-5 items-center">
                                <h3 class="dark:text-gray-800 text-gray-800 m-0">{{ job.company }}</h3>
                                <p class="text-gray-400 ml-auto pr-8">{{ job.date }}</p>
                            </div>
                            <ul v-for="desc in  job.description" :key="desc" style="list-style-type:square" class="px-5">
                                <li>{{ desc }}</li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 justify-self-center">
                            <img :src="'/images/' + job.image" class="h-28 m-1" :alt="job.image">
                        </div>
                    </div>

                </ScrollPanel>
            </TabPanel>
        </TabView>
    </AppSection>
</template>

<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ScrollPanel from 'primevue/scrollpanel';

const jobs = [
    {
        "role": "Tech Support Specialist",
        "image": "flightstream-sample.jpg",
        "company": "Research In Flight",
        "date": "Jun 2023 - Present",
        "description": [
            "Utilized FlightStream aerodynamics solver to analyze aircraft performance for various clients.",
            "Interfaced with clients to develop technical maturation plans and deliverables.",
            "Estimated aircraft performance using aerodynamic & propulsion models.",
            "Created YouTube tutorial videos for using FlightStream solver.",
        ]
    },
    {
        "role": "Aircraft Design Engineer",
        "image": "talyn-lift.png",
        "company": "Talyn Air",
        "date": "Aug 2021 - Apr 2023",
        "description": [
            "Conducted trade studies across various disciplines to help size and design an eVTOL aircraft system. Subsystems investigated include propellers, rotors, motors, battery systems, wings, empennage design, and avionics. Utilized OpenVSP and Python to conduct MDAO trade studies.",
            "Post-processed subscale flight test data to validate aerodynamic predictions and identify system performance. Utilized this data into a 6DOF Simulink model.",
            "Utilized Vortex-Lattice aerodynamics solvers to predict the performance of both the aircraft and its propellers. Developed aerodynamic databases for use in 6DOF model.",
            "Configured the vehicle OML with input from various subdisciplines. Kept meticulous record of a change log to track vehicle changes.",
            "Generated airloads from V-n diagram (per CFR 23) for use in a structural model in order to determine critical load cases. Handed off aerodynamic loads to structures team for FEA.",
            "Conducted trade studies on various battery architectures to converge upon design which met vehicle energy and power requirements. This includes conceptual full electric and hybrid powertrain studies.",
            "Applied load cases to nose gear landing gear FEM  to ensure component safety margins were met.",
            "Carried various flight parts from concept design to flight integration. This includes managing part numbers through out the release workflow, managing component requirements, and conducting loads and structural analysis to size hardware.",
            "Generated test cards for static thrust propeller testing with expected loads of up to 700lb.",
            "Captured live test data utilizing NI DAQ with LabView. Data post-processed with Python scripts."
        ]
    },
    {
        "role": "Propulsion Engineer",
        "image": "supersonic-inlet.png",
        "company": "Northrop Grumman",
        "date": "Jan 2018 - July 2021",
        "description": [
            "Led multi-disciplinary teams in designing and integrating clean sheet sub- to supersonic vehicle inlets and exhaust ducts which positioned team to capture various RFP. Design phases included conceptual, preliminary, and detailed design.",
            "Conducted parametric engine cycle analysis to determine engine performance across flight envelope. Performed gradient-based engine cycle optimization by setting design variables, objectives, and constraints.",
            "Generated and conducted parametric CFD studies of relevant geometries for vehicle-inlet integration. Automated linking between softwares to take model from CAD to CFD to post-process.",
            "Utilized CFD with aerodynamic shape optimization techniques to improve propulsion system performance; this included setting objetive and constraint functions. Wrote accompanying process documents to disseminate knowledge. Made significant progress in making this technique a group standard practice in design cycle.",
            "Acquired and analyzed data during live testing of vehicle model at NASA wind tunnel. Developed and documented tools to improve inlet analysis and design. Wrote final report and communicated findings to customers in final briefing.",
            "Implemented and managed schedule-driven technical plans for a variety of preliminary and conceptual design programs. These included considerations of cost, engineer and manufacturing hours, and fiscal cycles. Managed program to meet cost/budget forecasts. Programs ranged in sized from $0.3 to $1.0 million.",
        ]
    },
    {
        "role": "Loads & Dynamics Engineer",
        "image": "airplane.svg",
        "company": "Northrop Grumman",
        "date": "Nov 2016 - Jan 2018",
        "description": [
            "Calculated flight loads on air vehicle utilizing various softwares including FEMAP and ZONAIR. Gained experience running MSC and NX NASTRAN to obtain V-F-G results.",
            "Created a Matlab tool to simulate aircraft loads during various Navy carrier landing conditions. Work focus was on time-histories of landing gears to determine fatigue load cycles. Ground loads delivered as NASTRAN grid/load BDFs. Studies included taxi, catapult, arresting hook, and crosswind landing cases.",
            "Work helped standardized ground loads delivery process across work centers. Prepared material and presented tool to senior team members over a 32-hour training.",
        ]
    },
];


</script>

<style scoped>
::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-wrapper) {
    border-right: 0px solid var(--surface-ground);
}

::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-bar) {
    background-color: var(--primary-100);
    opacity: 1;
    transition: background-color 0.3s;
}

::v-deep(.p-scrollpanel.custombar1 .p-scrollpanel-bar:hover) {
    background-color: var(--primary-200);
}

.p-tabview-panels .p-tabview-nav {
    background: rgb(0 0 0);
}
</style>