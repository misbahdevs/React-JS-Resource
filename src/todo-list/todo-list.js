import './todo-list.css';

const pengurusOxigent = ["muhammad ikhwan fathulloh","Fatiya Robbaniyah","Novi Dinur Ramdaniati Shaliha", "Farid Taufik", "Muhammad Firman Hermawan", "Dedi Rosadi", "Siti Julaeha", "Martinus", "Faizal", "Ahmad Muji Burohman", "Rifqi Rifaldi", "Hendra", "Nada Ika Sari", "Angga Saeful", "Muhammad Luthfi Bangun Permadi", "Muhammad Rifaizh Zikir Wijaya", "Dani Kurniadi"];
const todoList = () => {
    return (
        <ul>
            <div className='leader'>
                <label>Leader</label>
                <li>{pengurusOxigent[0]}</li>
                <li>{pengurusOxigent[1]}</li>
            </div>

            <div className='divisionSecretariat'>
                <label>Division Secretariat</label>
                <li>{pengurusOxigent[2]}</li>
                <li>{pengurusOxigent[3]}</li>
            </div>

            <div className='gameDevelopment'>
                <label>Game and Design Development</label>
                <li>{pengurusOxigent[5]}</li>
                <li>{pengurusOxigent[6]}</li>
                <li>{pengurusOxigent[7]}</li>
                <li>{pengurusOxigent[8]}</li>
            </div>

            <div className='softwareDevelopment'>
                <label>Website and Mobile Development</label>
                <li>{pengurusOxigent[9]}</li>
                <li>{pengurusOxigent[10]}</li>
                <li>{pengurusOxigent[11]}</li>
                <li>{pengurusOxigent[12]}</li>
                <li>{pengurusOxigent[13]}</li>
            </div>

            <div className='hadwareDevelopment'>
                <label>IoT and Electronics Development</label>
                <li>{pengurusOxigent[14]}</li>
                <li>{pengurusOxigent[15]}</li>
            </div>           
        </ul>
    )
}

export default todoList