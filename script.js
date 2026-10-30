// =====================================================
// TAILOR SHOP MANAGEMENT
// فارسی + English
// Orders + Expenses + Dashboard + Search
// Monthly Report + Edit + Delete + Print Invoice
// =====================================================


// =====================================================
// LANGUAGE
// =====================================================

let currentLanguage = localStorage.getItem("language") || "fa";


const translations = {

    fa: {

        siteTitle: "مدیریت خیاطی",

        orderTitle: "ثبت سفارش جدید",

        customer: "نام مشتری",
        phone: "شماره تماس",
        clothing: "نوع لباس",
        price: "قیمت",
        advance: "پیش پرداخت",

        saveOrder: "ثبت سفارش",

        sales: "فروش کل",
        orders: "تعداد سفارشات",
        remaining: "باقی مانده",
        profit: "سود",

        search: "جستجوی مشتری یا نوع لباس...",

        ordersTitle: "سفارشات",

        delivery: "تاریخ تحویل",
        action: "عملیات",

        expenseTitle: "مصارف واقعی خیاطی",

        category: "دسته‌بندی مصرف",
        amount: "مبلغ",

        addExpense: "افزودن مصرف",

        expenseHistory: "تاریخچه مصارف",

        monthlyTitle: "گزارش ماهانه",
        monthlySales: "فروش ماهانه",
        monthlyOrders: "سفارشات ماهانه",
        monthlyExpenses: "مصارف ماهانه",
        monthlyProfit: "سود ماهانه",

        edit: "ویرایش",
        delete: "حذف",
        print: "چاپ",

        empty: "معلوماتی موجود نیست",

        fillOrder: "لطفاً تمام معلومات سفارش را وارد کنید.",
        invalidAdvance: "پیش پرداخت نمی‌تواند بیشتر از قیمت باشد.",

        fillExpense: "لطفاً دسته‌بندی، مبلغ و تاریخ مصرف را وارد کنید.",

        orderSaved: "سفارش با موفقیت ثبت شد.",
        expenseSaved: "مصرف با موفقیت ثبت شد.",

        deleteConfirm: "آیا مطمئن هستید که می‌خواهید حذف کنید؟",

        totalSales: "فروش کل",
        totalOrders: "تعداد سفارشات",
        totalRemaining: "باقی مانده",
        totalProfit: "سود",

        invoice: "فاکتور",
        shopName: "خیاطی من",
        customerName: "نام مشتری",
        phoneNumber: "شماره تماس",
        clothingType: "نوع لباس",
        totalPrice: "قیمت کل",
        advancePayment: "پیش پرداخت",
        remainingMoney: "باقی مانده",
        deliveryDate: "تاریخ تحویل",
        printInvoice: "چاپ فاکتور"

    },


    en: {

        siteTitle: "Tailor Shop Management",

        orderTitle: "New Tailor Order",

        customer: "Customer Name",
        phone: "Phone Number",
        clothing: "Clothing Type",
        price: "Price",
        advance: "Advance",

        saveOrder: "Save Order",

        sales: "Total Sales",
        orders: "Total Orders",
        remaining: "Remaining",
        profit: "Profit",

        search: "Search Customer or Clothing...",

        ordersTitle: "Orders",

        delivery: "Delivery Date",
        action: "Action",

        expenseTitle: "Real Tailoring Expenses",

        category: "Expense Category",
        amount: "Amount",

        addExpense: "Add Expense",

        expenseHistory: "Expense History",

        monthlyTitle: "Monthly Report",
        monthlySales: "Monthly Sales",
        monthlyOrders: "Monthly Orders",
        monthlyExpenses: "Monthly Expenses",
        monthlyProfit: "Monthly Profit",

        edit: "Edit",
        delete: "Delete",
        print: "Print",

        empty: "No information available",

        fillOrder: "Please enter all order information.",
        invalidAdvance: "Advance payment cannot be greater than the price.",

        fillExpense: "Please enter category, amount and date.",

        orderSaved: "Order saved successfully.",
        expenseSaved: "Expense saved successfully.",

        deleteConfirm: "Are you sure you want to delete?",

        totalSales: "Total Sales",
        totalOrders: "Total Orders",
        totalRemaining: "Remaining",
        totalProfit: "Profit",

        invoice: "Invoice",
        shopName: "My Tailor Shop",
        customerName: "Customer Name",
        phoneNumber: "Phone Number",
        clothingType: "Clothing Type",
        totalPrice: "Total Price",
        advancePayment: "Advance Payment",
        remainingMoney: "Remaining",
        deliveryDate: "Delivery Date",
        printInvoice: "Print Invoice"

    }

};



// =====================================================
// CHANGE LANGUAGE
// =====================================================

function changeLanguage() {

    currentLanguage = currentLanguage === "fa" ? "en" : "fa";

    localStorage.setItem("language", currentLanguage);

    updateLanguage();

}



// =====================================================
// UPDATE LANGUAGE
// =====================================================

function updateLanguage() {

    const t = translations[currentLanguage];


    document.documentElement.lang =
        currentLanguage === "fa" ? "fa" : "en";


    document.documentElement.dir =
        currentLanguage === "fa" ? "rtl" : "ltr";


    document.title = t.siteTitle;



    // Header

    document.getElementById("siteTitle").textContent =
        t.siteTitle;


    document.getElementById("languageBtn").textContent =
        currentLanguage === "fa" ? "English" : "فارسی";



    // Order

    document.getElementById("orderTitle").textContent =
        t.orderTitle;


    document.getElementById("customerName").placeholder =
        t.customer;


    document.getElementById("phone").placeholder =
        t.phone;


    document.getElementById("clothingType").placeholder =
        t.clothing;


    document.getElementById("price").placeholder =
        t.price;


    document.getElementById("advance").placeholder =
        t.advance;


    document.getElementById("saveOrder").textContent =
        t.saveOrder;



    // Dashboard

    document.getElementById("salesTitle").textContent =
        t.sales;


    document.getElementById("ordersTitle").textContent =
        t.orders;


    document.getElementById("remainingTitle").textContent =
        t.remaining;


    document.getElementById("profitTitle").textContent =
        t.profit;



    // Search

    document.getElementById("searchOrder").placeholder =
        t.search;



    // Orders

    document.getElementById("ordersTitle").textContent =
        t.ordersTitle;


    document.getElementById("customerHead").textContent =
        t.customer;


    document.getElementById("phoneHead").textContent =
        t.phone;


    document.getElementById("clothingHead").textContent =
        t.clothing;


    document.getElementById("priceHead").textContent =
        t.price;


    document.getElementById("advanceHead").textContent =
        t.advance;


    document.getElementById("remainingHead").textContent =
        t.remaining;


    document.getElementById("deliveryHead").textContent =
        t.delivery;


    document.getElementById("actionHead").textContent =
        t.action;



    // Expenses

    document.getElementById("expenseTitle").textContent =
        t.expenseTitle;


    document.getElementById("expenseCategory").placeholder =
        t.category;


    document.getElementById("realExpenseAmount").placeholder =
        t.amount;


    document.getElementById("addRealExpense").textContent =
        t.addExpense;


    document.getElementById("expenseHistoryTitle").textContent =
        t.expenseHistory;


    document.getElementById("categoryHead").textContent =
        t.category;


    document.getElementById("amountHead").textContent =
        t.amount;


    document.getElementById("dateHead").textContent =
        t.delivery;


    document.getElementById("expenseActionHead").textContent =
        t.action;



    // Monthly Report

    document.getElementById("monthlyTitle").textContent =
        t.monthlyTitle;


    document.getElementById("monthlySalesTitle").textContent =
        t.monthlySales;


    document.getElementById("monthlyOrdersTitle").textContent =
        t.monthlyOrders;


    document.getElementById("monthlyExpensesTitle").textContent =
        t.monthlyExpenses;


    document.getElementById("monthlyProfitTitle").textContent =
        t.monthlyProfit;



    showOrders();

    showRealExpenses();

}



// =====================================================
// SAVE ORDER
// =====================================================

document.getElementById("saveOrder").addEventListener("click", function () {


    const customer =
        document.getElementById("customerName").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const clothing =
        document.getElementById("clothingType").value.trim();


    const price =
        Number(document.getElementById("price").value);


    const advance =
        Number(document.getElementById("advance").value);


    const delivery =
        document.getElementById("delivery").value;



    // Validation

    if (
        customer === "" ||
        phone === "" ||
        clothing === "" ||
        price <= 0 ||
        delivery === ""
    ) {

        alert(translations[currentLanguage].fillOrder);

        return;

    }



    if (advance < 0 || advance > price) {

        alert(translations[currentLanguage].invalidAdvance);

        return;

    }



    const remaining = price - advance;



    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];



    orders.push({

        customer: customer,

        phone: phone,

        clothing: clothing,

        price: price,

        advance: advance,

        remaining: remaining,

        delivery: delivery

    });



    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );



    showOrders();

    updateDashboard();

    monthlyReport();

    clearOrderForm();


    alert(translations[currentLanguage].orderSaved);

});



// =====================================================
// CLEAR ORDER FORM
// =====================================================

function clearOrderForm() {

    document.getElementById("customerName").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("clothingType").value = "";

    document.getElementById("price").value = "";

    document.getElementById("advance").value = "";

    document.getElementById("delivery").value = "";

}



// =====================================================
// SHOW ORDERS
// =====================================================

function showOrders(searchValue = "") {

    const table =
        document.getElementById("ordersTable");


    table.innerHTML = "";


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    const search =
        searchValue.toLowerCase().trim();



    orders.forEach(function (order, index) {


        const customer =
            String(order.customer || "");


        const clothing =
            String(order.clothing || "");


        const phone =
            String(order.phone || "");



        if (
            search !== "" &&
            !customer.toLowerCase().includes(search) &&
            !clothing.toLowerCase().includes(search) &&
            !phone.toLowerCase().includes(search)
        ) {

            return;

        }



        const row = `

        <tr class="border-b hover:bg-gray-50">

            <td class="border p-3">
                ${escapeHTML(order.customer)}
            </td>

            <td class="border p-3">
                ${escapeHTML(order.phone)}
            </td>

            <td class="border p-3">
                ${escapeHTML(order.clothing)}
            </td>

            <td class="border p-3">
                ${Number(order.price)}
            </td>

            <td class="border p-3">
                ${Number(order.advance)}
            </td>

            <td class="border p-3">
                ${Number(order.remaining)}
            </td>

            <td class="border p-3">
                ${escapeHTML(order.delivery)}
            </td>

            <td class="border p-3 whitespace-nowrap">

                <button
                    onclick="editOrder(${index})"
                    class="bg-yellow-500 text-white px-2 py-1 rounded m-1">

                    ${translations[currentLanguage].edit}

                </button>


                <button
                    onclick="deleteOrder(${index})"
                    class="bg-red-600 text-white px-2 py-1 rounded m-1">

                    ${translations[currentLanguage].delete}

                </button>


                <button
                    onclick="printInvoice(${index})"
                    class="bg-blue-600 text-white px-2 py-1 rounded m-1">

                    ${translations[currentLanguage].print}

                </button>

            </td>

        </tr>

        `;


        table.innerHTML += row;

    });

}



// =====================================================
// DELETE ORDER
// =====================================================

function deleteOrder(index) {


    const confirmDelete =
        confirm(translations[currentLanguage].deleteConfirm);


    if (!confirmDelete) {

        return;

    }



    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    orders.splice(index, 1);


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    showOrders();

    updateDashboard();

    monthlyReport();

}



// =====================================================
// EDIT ORDER
// =====================================================

function editOrder(index) {


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    const order =
        orders[index];


    if (!order) {

        return;

    }



    document.getElementById("customerName").value =
        order.customer;


    document.getElementById("phone").value =
        order.phone;


    document.getElementById("clothingType").value =
        order.clothing;


    document.getElementById("price").value =
        order.price;


    document.getElementById("advance").value =
        order.advance;


    document.getElementById("delivery").value =
        order.delivery;



    // حذف نسخه قبلی

    orders.splice(index, 1);


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    showOrders();

    updateDashboard();

    monthlyReport();



    // رفتن به فرم

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// =====================================================
// DASHBOARD
// =====================================================

function updateDashboard() {


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    let sales = 0;

    let remaining = 0;



    orders.forEach(function (order) {

        sales += Number(order.price) || 0;

        remaining += Number(order.remaining) || 0;

    });



    document.getElementById("totalSales").textContent =
        sales;


    document.getElementById("totalOrders").textContent =
        orders.length;


    document.getElementById("totalRemaining").textContent =
        remaining;



    updateProfit();

}



// =====================================================
// REAL EXPENSE
// =====================================================

document
    .getElementById("addRealExpense")
    .addEventListener("click", function () {


        const category =
            document.getElementById("expenseCategory").value.trim();


        const amount =
            Number(
                document.getElementById("realExpenseAmount").value
            );


        const date =
            document.getElementById("expenseDate").value;



        if (
            category === "" ||
            amount <= 0 ||
            date === ""
        ) {

            alert(
                translations[currentLanguage].fillExpense
            );

            return;

        }



        let expenses =
            JSON.parse(
                localStorage.getItem("realExpenses")
            ) || [];



        expenses.push({

            category: category,

            amount: amount,

            date: date

        });



        localStorage.setItem(
            "realExpenses",
            JSON.stringify(expenses)
        );



        showRealExpenses();

        updateProfit();

        monthlyReport();



        document.getElementById(
            "expenseCategory"
        ).value = "";


        document.getElementById(
            "realExpenseAmount"
        ).value = "";


        document.getElementById(
            "expenseDate"
        ).value = "";



        alert(
            translations[currentLanguage].expenseSaved
        );

    });



// =====================================================
// SHOW REAL EXPENSES
// =====================================================

function showRealExpenses() {


    const table =
        document.getElementById("realExpenseTable");


    table.innerHTML = "";


    let expenses =
        JSON.parse(
            localStorage.getItem("realExpenses")
        ) || [];



    expenses.forEach(function (expense, index) {


        const row = `

        <tr class="border-b hover:bg-gray-50">

            <td class="border p-3">

                ${escapeHTML(expense.category)}

            </td>


            <td class="border p-3">

                ${Number(expense.amount)}

            </td>


            <td class="border p-3">

                ${escapeHTML(expense.date)}

            </td>


            <td class="border p-3">

                <button
                    onclick="deleteRealExpense(${index})"
                    class="bg-red-600 text-white px-3 py-1 rounded">

                    ${translations[currentLanguage].delete}

                </button>

            </td>

        </tr>

        `;


        table.innerHTML += row;

    });

}



// =====================================================
// DELETE REAL EXPENSE
// =====================================================

function deleteRealExpense(index) {


    const confirmDelete =
        confirm(translations[currentLanguage].deleteConfirm);


    if (!confirmDelete) {

        return;

    }



    let expenses =
        JSON.parse(
            localStorage.getItem("realExpenses")
        ) || [];


    expenses.splice(index, 1);


    localStorage.setItem(
        "realExpenses",
        JSON.stringify(expenses)
    );


    showRealExpenses();

    updateProfit();

    monthlyReport();

}



// =====================================================
// PROFIT
// =====================================================

function updateProfit() {


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    let expenses =
        JSON.parse(
            localStorage.getItem("realExpenses")
        ) || [];



    let sales = 0;

    let costs = 0;



    orders.forEach(function (order) {

        sales += Number(order.price) || 0;

    });



    expenses.forEach(function (expense) {

        costs += Number(expense.amount) || 0;

    });



    const profit =
        sales - costs;



    document.getElementById("profit").textContent =
        profit;

}



// =====================================================
// MONTHLY REPORT
// =====================================================

function monthlyReport() {


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    let expenses =
        JSON.parse(
            localStorage.getItem("realExpenses")
        ) || [];



    const today =
        new Date();


    const currentMonth =
        today.getMonth();


    const currentYear =
        today.getFullYear();



    let sales = 0;

    let orderCount = 0;

    let costs = 0;



    // سفارشات ماه جاری

    orders.forEach(function (order) {


        if (!order.delivery) {

            return;

        }



        const orderDate =
            new Date(order.delivery);


        if (
            orderDate.getMonth() === currentMonth &&
            orderDate.getFullYear() === currentYear
        ) {

            sales += Number(order.price) || 0;

            orderCount++;

        }

    });



    // مصارف ماه جاری

    expenses.forEach(function (expense) {


        if (!expense.date) {

            return;

        }



        const expenseDate =
            new Date(expense.date);


        if (
            expenseDate.getMonth() === currentMonth &&
            expenseDate.getFullYear() === currentYear
        ) {

            costs += Number(expense.amount) || 0;

        }

    });



    const profit =
        sales - costs;



    document.getElementById(
        "monthlySales"
    ).textContent = sales;


    document.getElementById(
        "monthlyOrders"
    ).textContent = orderCount;


    document.getElementById(
        "monthlyExpenses"
    ).textContent = costs;


    document.getElementById(
        "monthlyProfit"
    ).textContent = profit;

}



// =====================================================
// SEARCH
// =====================================================

document
    .getElementById("searchOrder")
    .addEventListener("input", function () {


        showOrders(this.value);

    });



// =====================================================
// DASHBOARD CARDS
// =====================================================

document
    .getElementById("salesCard")
    .addEventListener("click", function () {


        alert(
            translations[currentLanguage].totalSales +
            ": " +
            document.getElementById("totalSales").textContent
        );

    });



document
    .getElementById("ordersCard")
    .addEventListener("click", function () {


        alert(
            translations[currentLanguage].totalOrders +
            ": " +
            document.getElementById("totalOrders").textContent
        );

    });



document
    .getElementById("remainingCard")
    .addEventListener("click", function () {


        alert(
            translations[currentLanguage].totalRemaining +
            ": " +
            document.getElementById("totalRemaining").textContent
        );

    });



document
    .getElementById("profitCard")
    .addEventListener("click", function () {


        alert(
            translations[currentLanguage].totalProfit +
            ": " +
            document.getElementById("profit").textContent
        );

    });



// =====================================================
// PRINT INVOICE
// =====================================================

function printInvoice(index) {


    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    const order =
        orders[index];


    if (!order) {

        return;

    }



    const t =
        translations[currentLanguage];



    const invoiceWindow =
        window.open("", "_blank");



    invoiceWindow.document.write(`

<!DOCTYPE html>

<html lang="${currentLanguage}"
dir="${currentLanguage === "fa" ? "rtl" : "ltr"}">

<head>

<meta charset="UTF-8">

<title>${t.invoice}</title>


<style>

body {

    font-family: Arial, sans-serif;

    background: #f3f4f6;

    padding: 30px;

}


.invoice {

    max-width: 650px;

    margin: auto;

    background: white;

    padding: 30px;

    border-radius: 15px;

    box-shadow: 0 0 10px #ccc;

}


h1 {

    text-align: center;

    color: #2563eb;

}


h2 {

    text-align: center;

}


.row {

    display: flex;

    justify-content: space-between;

    border-bottom: 1px solid #ddd;

    padding: 12px 0;

}


.total {

    font-size: 20px;

    font-weight: bold;

}


.printButton {

    width: 100%;

    margin-top: 25px;

    padding: 12px;

    background: #2563eb;

    color: white;

    border: none;

    border-radius: 8px;

    cursor: pointer;

}


@media print {

    .printButton {

        display: none;

    }

    body {

        background: white;

    }

    .invoice {

        box-shadow: none;

    }

}

</style>

</head>


<body>


<div class="invoice">


<h1>
${t.shopName}
</h1>


<h2>
${t.invoice}
</h2>



<div class="row">

<span>${t.customerName}</span>

<strong>
${escapeHTML(order.customer)}
</strong>

</div>



<div class="row">

<span>${t.phoneNumber}</span>

<strong>
${escapeHTML(order.phone)}
</strong>

</div>



<div class="row">

<span>${t.clothingType}</span>

<strong>
${escapeHTML(order.clothing)}
</strong>

</div>



<div class="row">

<span>${t.totalPrice}</span>

<strong>
${order.price}
</strong>

</div>



<div class="row">

<span>${t.advancePayment}</span>

<strong>
${order.advance}
</strong>

</div>



<div class="row total">

<span>${t.remainingMoney}</span>

<strong>
${order.remaining}
</strong>

</div>



<div class="row">

<span>${t.deliveryDate}</span>

<strong>
${order.delivery}
</strong>

</div>



<button
class="printButton"
onclick="window.print()">

${t.printInvoice}

</button>


</div>


</body>

</html>

    `);


    invoiceWindow.document.close();

}



// =====================================================
// SECURITY HELPER
// جلوگیری از خراب شدن HTML با متن وارد شده توسط کاربر
// =====================================================

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



// =====================================================
// PAGE LOAD
// =====================================================

window.addEventListener("load", function () {


    updateLanguage();

    showOrders();

    showRealExpenses();

    updateDashboard();

    monthlyReport();


});