const table=document.getElementById("table")
for (const element of morseCodes) {
    table.innerHTML+=
        `<tr>
            <td class="left">
                ${element.char}
            </td>
            <td class="middle">
                ${element.code}
            </td>
            <td class="right">
                ${element.mnemonik}
            </td>
        </tr>`
}