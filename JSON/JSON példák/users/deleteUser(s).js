    
    function deleteUser(id) { 
        // Megkeressük a felhasználót a neve alapján a barátságosabb üzenethez
            const user = users.find(u => u.id === id)
            const userName = user ? `${user.first_name} ${user.last_name}` : "ezt a felhasználót"

        // Törlés megerősítés
        if (confirm(`Biztosan törölni szeretnéd ${userName} adatait?`)) {
            // Ha az OK-ra nyomott, szűrünk
                users = users.filter(user => user.id !== id)
           
            // Frissítjük a felületet
        }
    }

    // function deleteSelectedUsers() {
    document.getElementById("deleteSelectedUsers").onclick = () => {
        console.clear()

        const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
            console.dir (selectedCheckboxes)

        for (const checkbox of selectedCheckboxes) {
            const id = parseInt(checkbox.dataset.id)    // A data-id attribútumból kiolvassuk az ID-t
                //HTML-ben <input type="checkbox" data-id="${element.id}">
            deleteUser(id)      // meghívjuk az törlő függvényt
        }
        /*
            selectedCheckboxes.forEach(checkbox => {
                const id = parseInt(checkbox.dataset.id)    // A data-id attribútumból kiolvassuk az ID-t
                deleteUser(id)      // meghívjuk az törlő függvényt
            })
        */
    }
