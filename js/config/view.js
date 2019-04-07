function mostrarDiarios(datos, dia){
    const table = document.getElementById('containerDiariosConfig');
    table.innerHTML = '';
    datos.forEach( newsPaper => {
        table.innerHTML += `
        <tr id="${newsPaper.newsPaper}">
            <th scope="row">${newsPaper.newsPaper}</th>
            <td>${newsPaper.envy}</td>
            <td>${newsPaper.price}</td>
            <td>${newsPaper.earnings}</td>
            <td >
            <button class="btn-info btn rounded-circle" onclick="editView('${dia}','${newsPaper.newsPaper}')">
                <i class="fas fa-pen"></i>
            </button>
          </td>
          <td>
            <button class="btn-danger btn rounded-circle" onclick="deleteNewsPaper('${dia}','${newsPaper.newsPaper}')">
                <i class="fas fa-times"></i>
            </button>
        </tr>
        `;
    })
}

function editView(dia, newsPaperName){
    const indexOfNewsPaperInDay = config.days[dia].findIndex(day => {
        return day.newsPaper === newsPaperName;
    });
    const DiarioChoosen = config.days[dia][indexOfNewsPaperInDay];
    const element = document.getElementById(newsPaperName);
    element.innerHTML = `
        <th scope="row">
            <input type="text" class="form-control pill" value="${DiarioChoosen.newsPaper}">
        </th>
        <td>
            <input type="number" class="form-control pill" value="${DiarioChoosen.envy}">       
        </td>
        <td>
            <input type="number" class="form-control pill" value="${DiarioChoosen.price}">
        </td>
        <td>
            <input type="number" class="form-control pill" value="${DiarioChoosen.earnings}">       
        </td>
        <td >
        <button class="btn-success btn rounded-circle" onclick="confirmEditView('${dia}','${DiarioChoosen.newsPaper}')">
            <i class="fas fa-check"></i>
        </button>
        </td>
        <td>
        <button class="btn-danger btn rounded-circle" onclick="clearInputs('${DiarioChoosen.newsPaper}')">
            <i class="fas fa-times"></i>
        </button>
    `;

}

function confirmEditView(dia, newsPaperName){
    const element = document.getElementById(newsPaperName);
    const name = element.firstElementChild.firstElementChild.value;
    const envy = element.childNodes[3].firstElementChild.value;
    const price = element.childNodes[5].firstElementChild.value;
    const earnings = element.childNodes[7].firstElementChild.value;

    const data = {
        id: newsPaperName,
        newsPaper : name,
        envy : envy,
        price : price,
        earnings : earnings
    }

    confirmEdit(dia, data);
}

function clearInputs(newsPaperName){
    const element = document.getElementById(newsPaperName);
    element.childNodes[3].firstElementChild.value = '';
    element.childNodes[5].firstElementChild.value = '';
    element.childNodes[7].firstElementChild.value = '';
}

function newNewsPaper(){
    const beforeShiet = document.getElementById('newNewsPaper');
    if(beforeShiet){
        beforeShiet.remove();
    }
    const container = document.getElementById('containerDiariosConfig');
    let row = document.createElement('tr');
    row.setAttribute('id','newNewsPaper');
    row.innerHTML = `
    <th scope="row">
        <input type="text" class="form-control pill">
    </th>
    <td>
        <input type="number" class="form-control pill">       
    </td>
    <td>
        <input type="number" class="form-control pill">
    </td>
    <td>
        <input type="number" class="form-control pill">       
    </td>
    <td >
    <button class="btn-success btn rounded-circle" onclick="confirmNewNewsPaper()">
        <i class="fas fa-check"></i>
    </button>
    </td>
    <td>
    <button class="btn-danger btn rounded-circle" onclick="clearInputsNew()">
        <i class="fas fa-times"></i>
    </button>
    `;
    container.prepend(row);
}

function confirmNewNewsPaper(){
    const element = document.getElementById('newNewsPaper');
    const name = element.firstElementChild.firstElementChild.value;
    const envy = element.childNodes[3].firstElementChild.value;
    const price = element.childNodes[5].firstElementChild.value;
    const earnings = element.childNodes[7].firstElementChild.value;

    const data = {
        newsPaper : name,
        envy : envy,
        price : price,
        earnings : earnings
    }
    newNewsPaperController(data);
}

