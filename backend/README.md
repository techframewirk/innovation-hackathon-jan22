# Sooche API (For ONDC Digital Catalog)

This service provides endpoints for creating a seller store and it's catalog.
It also provides access to a common master database which can be used by any seller 
to fasten creating their own catalog.

### `Requirements`
- JRE - 11 version
- JDK - 11 version
- Maven - 4.0.0

### `Installation`
- git clone `git@github.com:Open-network-for-digital-commerce/innovation-hackathon-jan22.git`
- cd innovation-hackathon-jan22/backend
- mvn clean install

### `Run application`
- Run Command `mvn spring-boot:run`

## APIs:
### Store:
- `/store/create`
```
METHOD: POST
Payload:
{
	"name" : "Store",
	"contactNumberList" : ["1111"],
	"location" : {
		"address" : {
			"addressLine1" : "xy",
			"addressLine2" : "zz",
			"landmark" : "nearxy",
			"city" : "blr",
			"state" : "KA",
			"postalcode" : "111111"
		},
		"gpsCoordinates" : {
			"longitude" : "11.0",
			"latitude" : "22.00"
		}
	}
}
RequiredFields: [name, contactNumberList]
Response: store_id
```
- `/store/get/?id={store_id}`
```
METHOD: GET
Response:
{
	"name" : "Store",
	"contactNumberList" : ["1111"],
	"location" : {
		"address" : {
			"addressLine1" : "xy",
			"addressLine2" : "zz",
			"landmark" : "nearxy",
			"city" : "blr",
			"state" : "KA",
			"postalcode" : "111111"
		},
		"gpsCoordinates" : {
			"longitude" : "11.0",
			"latitude" : "22.00"
		}
	}
}
```

### Master Catalog
- `/catalog/master/search?query=<searchText>`
```
METHOD: GET
params: query
Headers: {
    'id': 'store_id'
}
```

### Seller Catalog

- `/catalog/products/add`
    
- `/catalog/products/addCustomProduct`

- `/catalog/products/get`

- `/catalog/products/update`

- `/catalog/products/delete`
