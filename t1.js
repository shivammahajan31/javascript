    `var laptop1 = {
    RAM: "8 GB",
    SSD: "512 GB",
};

laptopDetails = function(brand,processor) {

   console.log(this.RAM + " " + this.SSD + " " + brand + " " + processor);
} 

laptopDetails.call(laptop1,"Dell","i5");
laptopDetails.apply(laptop1,["lenovo","i7"]);
