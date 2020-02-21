function execute()
{
    let inputNumber;

    inputNumber = parseInt(document.getElementById("inputMonth").value);

    switch (inputNumber)
    {
        case 1:
            document.getElementById("result").innerHTML = "Thang 1 co 31 ngay";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Thang 2 co 28 hoac 29 ngay";
            break;
        case 3:
            document.getElementById("result").innerHTML = "Thang 3 co 31 ngay";
            break;
        case 4:
            document.getElementById("result").innerHTML = "Thang 4 co 30 ngay";
            break;
        case 5:
            document.getElementById("result").innerHTML = "Thang 5 co 31 ngay";
            break;
        case 6:
            document.getElementById("result").innerHTML = "Thang 6 co 30 ngay";
            break;
        case 7:
            document.getElementById("result").innerHTML = "Thang 7 co 31 ngay";
            break;
        case 8:
            document.getElementById("result").innerHTML = "Thang 8 co 31 ngay";
            break;
        case 9:
            document.getElementById("result").innerHTML = "Thang 9 co 30 ngay";
            break;
        case 10:
            document.getElementById("result").innerHTML = "Thang 10 co 31 ngay";
            break;
        case 11:
            document.getElementById("result").innerHTML = "Thang 11 co 30 ngay";
            break;
        case 12:
            document.getElementById("result").innerHTML = "Thang 12 co 31 ngay";
            break;
        default:
            alert("Vui long nhap lai!");
            break;
    }
}