function checkForm() {

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let postcode = document.getElementById('postcode').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let email = document.getElementById('email').value;
    let mug = document.getElementById('mug').value;
    let bracelet = document.getElementById('bracelet').value;
    let plate = document.getElementById('plate').value;


    let errors = '';
    document.getElementById('errors').innerHTML = '';

    if (name.trim() == '') {
        errors += 'Please enter a name <br>';
    }

    if (phone.trim() == '') {
        errors += 'Please enter a Phone Number <br>';
    }

    let phoneRegex = /^[2-9]{3}[\-][0-9]{3}[\-][0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
        errors += 'Phone not in correct format <br>';
    }

    let emailRegex = /^[A-z0-9]+[\@][A-z]+[\.][A-z]+$/;
    if (!emailRegex.test(email)) {
        errors += 'Email is not in valid format <br>';
    }

    if (province == '') {
        errors += 'Please Select Province <br>';
    }

    let mugRegex = /^[0-9]+$/;
    if (!mugRegex.test(mug)) {
        errors += 'Plese Enter Product QTY <br>'
    }
    let braceletRegex = /^[0-9]+$/;
    if (!braceletRegex.test(bracelet)) {
        errors += 'Plese Enter Product QTY <br>'
    }
    let plateRegex = /^[0-9]+$/;
    if (!plateRegex.test(plate)) {
        errors += 'Plese Enter Product QTY <br>'
    }

    if (errors == '') {
        let mugcost = 8.50;
        let braceletcost = 41.99;
        let platecost = 17.50;
        let total1Amount = parseFloat(mug) * mugcost;
        let total2Amount = parseFloat(bracelet) * braceletcost;
        let total3Amount = parseFloat(plate) * platecost;
        let totalCost = total1Amount + total2Amount + total3Amount;
        let gstTax = totalCost * 13 / 100;
        let grandTotal = totalCost + gstTax;

        let myOutput = `
            <u>Name:</u> ${name} <br>
            <u>Phone</u>: ${phone} <br>
            <u>Email</u>: ${email} <br>
            <u>Post code</u>: ${postcode} <br>
            <u>Address</u>: ${address} <br>
            <u>City</u>: ${city} <br>
            <u>Province</u>: ${province} <br></br>
            <u>Mug QTY</u>: ${mug} <br>
            <u>Bracelet QTY</u>: ${bracelet} <br>
            <u>Plate QTY</u>: ${plate} <br>
            <u>Mug Unit Price</u>: $${mugcost} <br>
            <u>Bracelet Unit Price</u>: $${braceletcost} <br>
            <u>Plate Unit Price</u>: $${platecost} <br>
            <u>Sub Total</u>: $${totalCost} <br>
            <u>GST</u>: $${gstTax} <br>
            <u>Total</u>: $${grandTotal} <br>
            `;
        document.getElementById('formResult').innerHTML = myOutput;

    }
    else {
        document.getElementById('errors').innerHTML = errors;
    }
    return false;
}