function updateData() {
    const final_data = {};
    final_data.id = modelCarForm.getData().id;

    final_data.name = inCarFormname.getValue();
    final_data.numberPlate = inCarFormnumberPlate.getValue();
    final_data.ownership = inCarFormownership.getValue();
    final_data.condition = inCarFormcondition.getValue();
    final_data.checking = inCarFormchecking.getValue();

    var options = {
        data: final_data
    };
    
    apiRestAPIUpdate(options);
};

function createData() {
    const final_data = {};
    final_data.name = inCarFormname.getValue();
    final_data.numberPlate = inCarFormnumberPlate.getValue();
    final_data.ownership = inCarFormownership.getValue();
    final_data.condition = inCarFormcondition.getValue();
    final_data.checking = inCarFormchecking.getValue();

    var options = {
        data: final_data
    };

    apiRestAPICreate(options);
};

// function removeData() {
//     const id = modelCarForm.getData().id;
//     const whereParam = JSON.stringify({ id: id });

//     var options = {
//         url: `/dailymaintenance?where=${encodeURIComponent(whereParam)}`,
//         method: 'DELETE'
//     };

//     apiRestAPIDelete(options);
// }


function removeData() {
    const id = modelCarForm.getData().id;
    const whereParam = encodeURIComponent(JSON.stringify({ id: id }));

    fetch(`/dailymaintenance?where=${whereParam}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) throw new Error('Gagal menghapus data');
        return response.json();
    })
    .then(data => {
        console.log('Data berhasil dihapus:', data);
    })
    .catch(error => {
        console.error('Error saat delete:', error);
    });
}
