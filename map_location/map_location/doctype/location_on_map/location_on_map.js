// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
cur_frm.add_fetch("address","city","city")
cur_frm.add_fetch("address","pincode","pincode")
cur_frm.add_fetch("address","country","country")
frappe.ui.form.on('Location On Map', {
	refresh:function(frm){
	    html = $(frappe.render_template("location_on_map"))
	    $(cur_frm.fields_dict.map_location.wrapper).html(html);
		if(!cur_frm.doc.__islocal){
			$(cur_frm.fields_dict.map_location.wrapper).empty()
			common_function_render_map(frm)
		}
	},
	address:function(frm){
		console.log("in address")
		get_long_lat()
	},
	validate:function(frm){
		/*common_function_render_map(frm)*/
		get_long_lat()
	}
});

get_long_lat = function(frm){
	frappe.call({
        method: "frappe.client.get_value",
        args: {
            doctype: "MAP Setting",
            fieldname: "api_key",
		    filters: { name: "MAP Setting" },
        },
       	callback: function(res){
          	if (res && res.message){
          		console.log(res.message['api_key'])
				$.getScript("http://maps.google.com/maps/api/js?key="+res.message['api_key']+"&sensor=false&v=3.exp", function(){
					var geocoder = new google.maps.Geocoder();
					var address = ""+cur_frm.doc.pincode+","+cur_frm.doc.city+","+cur_frm.doc.country;
					console.log(address,"address")
					console.log(geocoder,"geocoder")
					geocoder.geocode( {'address': address}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							var latitude = results[0].geometry.location.lat();
							var longitude = results[0].geometry.location.lng();
							console.log(longitude,latitude)
							cur_frm.set_value("lon",longitude)
							cur_frm.set_value("lat",latitude)
							common_function_render_map(frm)
						} 
					});
				});
           	}
       	}  	
    });
}


common_function_render_map = function(frm){
	if(cur_frm.doc.lat && cur_frm.doc.lon){
		    html = $(frappe.render_template("location_on_map"))
		    console.log(html,"html")
		    $(cur_frm.fields_dict.map_location.wrapper).html(html);
		}
	var mymap = L.map('mapid').setView([flt(cur_frm.doc.lat),flt(cur_frm.doc.lon)], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);


	L.marker([flt(cur_frm.doc.lat),flt(cur_frm.doc.lon)]).addTo(mymap)
		.bindPopup("<b>"+cur_frm.doc.city+"<br>"+cur_frm.doc.country+"</b>").openPopup();

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
}