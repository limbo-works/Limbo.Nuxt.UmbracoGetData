export default {
"meta": {
"code": 200
},
"pageId": 1425,
"pageKey": "b7cc4857-2758-463b-81ac-16f32416715d",
"siteId": 1423,
"siteKey": "e2159708-e44d-4541-956e-e2b3b08892a9",
"contentGuid": "f33ad582-a47e-487b-bcac-32fb7c1272c1",
"executeTimeMs": 2,
"site": {
"id": 1423,
"name": "Slagelse Intranet",
"url": "/da/",
"alias": "intra",
"culture": "da-DK",
"cultureId": 1424,
"cultures": [
{
"id": 1424,
"name": "Dansk",
"url": "/da/",
"culture": "da-DK",
"current": true,
"label": "Dansk",
"label__obsolete": "Use the 'name' property instead.",
"value": "/da/",
"value__obsolete": "Use the 'value' property instead."
}
],
"searchPage": null,
"breakingNews": null,
"footer": {
"shortcuts": null,
"contact": {
"title": "Kontakt os",
"phone": null,
"phonenumber": null,
"phonenumber__obsolete": "Use the 'phone' property instead.",
"email": null,
"link": null
},
"findUs": {
"title": "Find os",
"name": "Slagelse Intranet",
"siteName": "Slagelse Intranet",
"street": "",
"postalCode": "",
"city": "",
"vatNumber": null,
"vat": null,
"ean": null,
"openingHours": null
},
"links": []
},
"navigation": {
"main": [
{
"id": 1432,
"key": "bed38554-36cf-490f-a1c6-b43d2aa431db",
"type": "content",
"name": "Undervisning",
"url": "/da/undervisning/",
"title": "Denne side bliver brugt til undervisning",
"teaser": "Denne- og underliggende sider vil blive brugt til undervisning."
},
{
"id": 1426,
"key": "bb900eb5-64d5-49a2-a0bd-f6602fdefe57",
"type": "content",
"name": "Limbo",
"url": "/da/limbo/",
"title": "Limbo"
}
],
"burger": [
{
"id": 1432,
"key": "bed38554-36cf-490f-a1c6-b43d2aa431db",
"type": "content",
"name": "Undervisning",
"url": "/da/undervisning/",
"title": "Denne side bliver brugt til undervisning",
"teaser": "Denne- og underliggende sider vil blive brugt til undervisning.",
"includeChildren": true,
"hasChildren": true,
"children": [
{
"id": 1433,
"key": "cafa4a68-b02b-4f69-8f33-ec55852fbea5",
"type": "content",
"name": "Alle blocks",
"url": "/da/undervisning/alle-blocks/",
"title": "Alle blocks"
}
]
},
{
"id": 1426,
"key": "bb900eb5-64d5-49a2-a0bd-f6602fdefe57",
"type": "content",
"name": "Limbo",
"url": "/da/limbo/",
"title": "Limbo"
},
{
"id": 11036,
"key": "50fd9cf7-2b10-4c9e-a6fc-ef7f3cff041f",
"type": "content",
"name": "Arbejdsrum",
"url": "/da/arbejdsrum/",
"title": "Arbejdsrum"
},
{
"id": 11051,
"key": "fc1861cb-094a-415a-b8e0-3c63968f14b8",
"type": "content",
"name": "Nyheder",
"url": "/da/nyheder/",
"title": "Nyheder"
},
{
"id": 11053,
"key": "2df5ce9e-a5f5-454c-88b4-c2679ac825b1",
"type": "content",
"name": "Arrangementer",
"url": "/da/arrangementer/",
"title": "Arrangementer"
},
{
"id": 12803,
"key": "87bf0533-c1a3-47d3-98d4-2b760bf1ae6f",
"type": "content",
"name": "Beskeder",
"url": "/da/beskeder/",
"title": "Beskeder"
}
],
"secondary": [
{
"type": "content",
"name": "Forside",
"url": "/da/forside/"
},
{
"type": "content",
"name": "Profil",
"url": "/da/medarbejdere/profil/"
}
]
},
"socialMedia": [],
"fallbackIcon": null,
"fallbackImage": null,
"centeredLogo": false,
"climateFriendly": false,
"theme": {
"alias": "limbociti",
"label": "limbociti",
"label__obsolete": "Use the 'alias' property instead.",
"colors": {
"canvas": "limbociti",
"primary": "limbociti",
"secondary": "limbociti",
"surface": "limbociti"
}
},
"favorites": {
"status": {
"endpointUrl": "/api/citi/favorites/status",
"method": "GET",
"fields": [
{
"type": "hidden",
"name": "cultureId",
"value": 1423
},
{
"type": "hidden",
"name": "targetType",
"value": "{targetType}"
},
{
"type": "hidden",
"name": "targetKey",
"value": "{targetKey}"
}
]
},
"toggle": {
"endpointUrl": "/api/citi/favorites/toggle",
"method": "POST",
"fields": [
{
"type": "hidden",
"name": "cultureId",
"value": 1423
},
{
"type": "hidden",
"name": "targetType",
"value": "{targetType}"
},
{
"type": "hidden",
"name": "targetKey",
"value": "{targetKey}"
}
]
},
"list": {
"endpointUrl": "/api/citi/favorites",
"method": "GET",
"fields": [
{
"type": "hidden",
"name": "cultureId",
"value": 1423
}
]
},
"add": {
"endpointUrl": "/api/citi/favorites",
"method": "POST",
"fields": [
{
"type": "hidden",
"name": "cultureId",
"value": 1423
},
{
"type": "hidden",
"name": "targetType",
"value": "{targetType}"
},
{
"type": "hidden",
"name": "targetKey",
"value": "{targetKey}"
}
]
},
"remove": {
"endpointUrl": "/api/citi/favorites/remove",
"method": "DELETE",
"fields": [
{
"type": "hidden",
"name": "cultureId",
"value": 1423
},
{
"type": "hidden",
"name": "targetType",
"value": "{targetType}"
},
{
"type": "hidden",
"name": "targetKey",
"value": "{targetKey}"
}
]
}
}
},
"content": {
"id": 1425,
"key": "b7cc4857-2758-463b-81ac-16f32416715d",
"name": "Forside",
"level": 3,
"url": "/da/forside/",
"intro": {
"title": "Forside"
},
"breadcrumb": [
{
"key": "5bd9d999-4533-46b4-a180-e314e4cb2ec8",
"name": "Forside",
"url": "/da/"
},
{
"key": "b7cc4857-2758-463b-81ac-16f32416715d",
"name": "Forside",
"url": "/da/forside/"
}
],
"contentElements": [
{
"key": "90151d50-a620-463d-89a6-e95e343e0ef1",
"alias": "BlockRelatedContent",
"content": {
"view": "grid",
"items": [
{
"id": 12853,
"key": "d61a0765-820d-44aa-9030-a44cdd2fed02",
"type": "content",
"name": "Profil",
"url": "/da/medarbejdere/profil/",
"title": "Profil"
},
{
"id": 12803,
"key": "87bf0533-c1a3-47d3-98d4-2b760bf1ae6f",
"type": "content",
"name": "Beskeder",
"url": "/da/beskeder/",
"title": "Beskeder"
},
{
"id": 11036,
"key": "50fd9cf7-2b10-4c9e-a6fc-ef7f3cff041f",
"type": "content",
"name": "Arbejdsrum",
"url": "/da/arbejdsrum/",
"title": "Arbejdsrum"
},
{
"id": 12936,
"key": "129563a6-4ea8-4e1c-9306-6d80f6a51362",
"type": "content",
"name": "Et privat arbejdsrum som ingen har adgang til",
"url": "/da/arbejdsrum/et-privat-arbejdsrum-som-ingen-har-adgang-til/",
"title": "Et privat arbejdsrum som ingen har adgang til"
}
]
},
"settings": {
"includeInToc": true
}
},
{
"key": "d92351d9-6267-4a5e-886a-388f4388eb18",
"alias": "BlockLinkList",
"content": {
"title": "Eksempel på links",
"items": [
{
"type": "content",
"name": "Arbejdsrum",
"url": "/da/arbejdsrum/"
},
{
"type": "content",
"name": "Arrangementer",
"url": "/da/arrangementer/"
},
{
"type": "content",
"name": "Nyheder",
"url": "/da/nyheder/"
},
{
"type": "content",
"name": "Beskeder",
"url": "/da/beskeder/"
},
{
"type": "content",
"name": "Medarbejdere",
"url": "/da/medarbejdere/"
},
{
"type": "content",
"name": "En helt ny underside",
"url": "/da/en-helt-ny-underside/"
}
]
},
"settings": {
"includeInToc": true
}
},
{
"key": "5c538f6d-2cb5-4e0e-9b2f-5d3463e40460",
"alias": "BlockNewsList",
"content": {
"title": "Nyheder",
"link": {
"type": "content",
"name": "Nyheder",
"url": "/da/nyheder/"
},
"items": [
{
"id": 12887,
"key": "c5afda22-ad2c-45fd-86a9-2ebaddd43972",
"type": "content",
"name": "STO Nyhed",
"url": "/da/nyheder/sto-nyhed/",
"title": "STO Nyhed",
"teaser": "Nyhed STO",
"newsDate": "2025-09-12T12:09:00.000+02:00",
"categories": [
"Kategori 1",
"Kategori 3"
],
"newsType": "Nyhed"
},
{
"id": 12890,
"key": "5e2a43e3-daf0-4f89-96cc-c24647e9298b",
"type": "content",
"name": "Jeg er en ny nyhed",
"url": "/da/nyheder/jeg-er-en-ny-nyhed/",
"title": "Jeg er en ny nyhed",
"teaser": "Manchet",
"newsDate": "2025-09-11T12:55:00.000+02:00",
"categories": [
"Kategori 2"
],
"newsType": "Nyhed"
},
{
"id": 11052,
"key": "dca9477d-7beb-4f72-a830-d7a64b4bc935",
"type": "content",
"name": "Min nyhed",
"url": "/da/nyheder/min-nyhed/",
"title": "Min nyhed",
"newsDate": "2025-06-13T16:00:00.000+02:00",
"categories": [
"Kategori 1"
],
"newsType": "Nyhed"
},
{
"id": 11142,
"key": "b76469f0-0a59-43a5-bfce-fbd9c925c7aa",
"type": "content",
"name": "Test",
"url": "/da/nyheder/test/",
"title": "Test",
"newsDate": "2025-06-01T12:48:00.000+02:00",
"categories": [
"Kategori 1"
],
"newsType": "Pressemeddelelse"
}
],
"showImages": true,
"frontend": {
"add": [
{
"endpointUrl": "/api/citi/frontend/fc1861cb-094a-415a-b8e0-3c63968f14b8/children",
"type": "slIntraNewsPage",
"name": "Opret nyhed",
"fields": [
{
"type": "text",
"name": "title",
"label": "Overskrift",
"required": true
},
{
"type": "datetime-local",
"name": "newsDate",
"label": "Dato",
"required": true
},
{
"type": "text",
"name": "teaser",
"label": "Manchet",
"maxlength": 150
},
{
"type": "file",
"name": "introImage",
"label": "Topbillede",
"files": [],
"value": ""
},
{
"type": "rte",
"name": "frontendText",
"label": "Brødtekst",
"required": true
},
{
"type": "text",
"name": "frontendVideo",
"label": "Video",
"helpText": "Understøtter links fra YouTube eller DreamBroker."
},
{
"type": "file",
"name": "frontendFiles",
"label": "Filer",
"multiple": true,
"files": [],
"value": ""
},
{
"type": "searchableDropdown",
"name": "categories",
"label": "Kategorier",
"required": true,
"multiple": true,
"value": "",
"items": [
{
"value": "c463203f-6033-4cd5-a116-e82cb722fcbc",
"label": "Kategori 1",
"checked": false
},
{
"value": "57421e28-92d8-478b-b584-832caea4e2d3",
"label": "Kategori 2",
"checked": false
},
{
"value": "3b83284a-36d3-424e-9f14-9236dd76534c",
"label": "Kategori 3",
"checked": false
}
]
},
{
"type": "searchableDropdown",
"name": "type",
"label": "Type",
"required": true,
"value": "",
"items": [
{
"value": "95b7bf1e-1250-4298-a618-340ed1bc2c59",
"label": "Nyhed",
"checked": false
},
{
"value": "77cc738d-8218-4580-9d2b-af0b4116b6db",
"label": "Pressemeddelelse",
"checked": false
}
]
},
{
"type": "email",
"name": "frontendResponsibleEmail",
"label": "Ansvarlig e-mail",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
},
{
"type": "tel",
"name": "frontendResponsiblePhone",
"label": "Ansvarlig telefon",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
}
]
}
]
}
},
"settings": {
"includeInToc": true
}
},
{
"key": "0fd6ee8c-e425-4da1-89de-adb84f795247",
"alias": "BlockEventList",
"content": {
"title": "Arrangementer",
"link": {
"type": "content",
"name": "Alle arrangementer",
"url": "/da/arrangementer/"
},
"items": [
{
"id": 12998,
"key": "3ae1e589-15f1-4731-bc32-9042c8e72611",
"type": "content",
"name": "Test 2",
"url": "/da/arrangementer/test-2/",
"title": "Test 2",
"details": {
"start": "2025-10-24T13:23:00.000+02:00",
"end": null,
"location": null
}
},
{
"id": 12888,
"key": "2759d676-337a-494f-8df6-99ef21ec9b0b",
"type": "content",
"name": "STO Arrangement",
"url": "/da/arrangementer/sto-arrangement/",
"title": "STO Arrangement",
"details": {
"start": "2025-11-14T12:10:00.000+01:00",
"end": null,
"location": null
}
}
],
"frontend": {
"add": [
{
"endpointUrl": "/api/citi/frontend/2df5ce9e-a5f5-454c-88b4-c2679ac825b1/children",
"type": "slIntraEventPage",
"name": "Opret arrangement",
"fields": [
{
"type": "text",
"name": "title",
"label": "Overskrift",
"required": true
},
{
"type": "datetime-local",
"name": "startDate",
"label": "Startdato og -tidspunkt",
"required": true
},
{
"type": "datetime-local",
"name": "endDate",
"label": "Slutdato og -tidspunkt"
},
{
"type": "text",
"name": "teaser",
"label": "Manchet",
"maxlength": 150
},
{
"type": "file",
"name": "introImage",
"label": "Topbillede",
"files": [],
"value": ""
},
{
"type": "rte",
"name": "frontendText",
"label": "Brødtekst",
"required": true
},
{
"type": "text",
"name": "frontendVideo",
"label": "Video",
"helpText": "Understøtter links fra YouTube eller DreamBroker."
},
{
"type": "file",
"name": "frontendFiles",
"label": "Filer",
"multiple": true,
"files": [],
"value": ""
},
{
"type": "searchableDropdown",
"name": "categories",
"label": "Kategorier",
"required": true,
"multiple": true,
"value": "",
"items": [
{
"value": "cfe78e65-ac1b-48c8-9557-6f13a9898f59",
"label": "Kategori 1",
"checked": false
},
{
"value": "ee87549b-42a4-458e-b1e6-60e7eb30078e",
"label": "Kategori 2",
"checked": false
},
{
"value": "b145af3e-e345-4a7c-8924-4d8acde9aa63",
"label": "Kategori 3",
"checked": false
}
]
},
{
"type": "text",
"name": "locationAddress",
"label": "Lokation",
"required": true
},
{
"type": "text",
"name": "priceText",
"label": "Pris"
},
{
"type": "email",
"name": "frontendResponsibleEmail",
"label": "Ansvarlig e-mail",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
},
{
"type": "tel",
"name": "frontendResponsiblePhone",
"label": "Ansvarlig telefon",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
}
]
}
]
}
},
"settings": {
"includeInToc": true
}
},
{
"key": "1f0546ad-2035-43d9-9033-e261f94f8b9f",
"alias": "BlockRelatedContent",
"content": {
"title": "Limbo",
"view": "slider",
"items": [
{
"id": 10792,
"key": "da3e3469-6610-4022-9ab1-91127c040fc0",
"type": "content",
"name": "Indholdsside",
"url": "/da/limbo/indholdsside/",
"title": "Indholdsside",
"teaser": "Her er en teaser"
},
{
"id": 11218,
"key": "c2796579-f92d-4cc7-8d7c-070f01aa1222",
"type": "content",
"name": "Formular med captcha",
"url": "/da/limbo/formular-med-captcha/",
"title": "Test"
},
{
"id": 11281,
"key": "0b1594ac-2007-43bc-818c-a10a8e8b7f8c",
"type": "content",
"name": "Redirect test",
"url": "/da/limbo/redirect-test/",
"title": "Redirect test"
},
{
"id": 12996,
"key": "f3774328-a049-4c9a-96e3-9ca83531678d",
"type": "content",
"name": "Bjerner",
"url": "/da/limbo/bjerner/",
"title": "Bjerner"
}
]
},
"settings": {
"includeInToc": true
}
},
{
"key": "7df74745-2fa7-4ea4-90cd-715a3b22d330",
"alias": "BlockImages",
"content": {
"title": "Billeder",
"items": [
{
"image": {
"id": 1429,
"key": "eae4ee83-087d-44b5-a622-e5a10d9faa67",
"type": "image",
"name": "Brown ice cream cone",
"url": "/media/qxxoj0t3/sarah-kilian-52jrtc2s_ve-unsplash.jpg",
"width": 1920,
"height": 1280,
"size": 223158,
"extension": "jpg",
"cropUrl": "/media/qxxoj0t3/sarah-kilian-52jrtc2s_ve-unsplash.jpg?width=1920&height=1280&v=1dbb85c7656e5b0",
"altText": "",
"attribution": "Sarah Kilian @ Unsplash"
},
"showCompleteImage": true,
"text": "",
"caption": "",
"caption__obsolete": "Use the 'text' property instead."
},
{
"image": {
"id": 1441,
"key": "9d7ac430-b5ee-417c-8cae-4a3d008761c0",
"type": "image",
"name": "Ian Dooley D1upkifd04a Unsplash",
"url": "/media/g1chvhpo/ian-dooley-d1upkifd04a-unsplash.jpg",
"width": 2662,
"height": 3993,
"size": 846272,
"extension": "jpg",
"cropUrl": "/media/g1chvhpo/ian-dooley-d1upkifd04a-unsplash.jpg?width=2662&height=3993&v=1dbb85cad81d270",
"altText": ""
},
"showCompleteImage": true,
"text": "",
"caption": "",
"caption__obsolete": "Use the 'text' property instead."
},
{
"image": {
"id": 1445,
"key": "df86b2a3-67af-4713-a8ea-40a38b988e07",
"type": "image",
"name": "Edoardo Giudici Saraval Hggist5htgg Unsplash",
"url": "/media/uwzinx3p/edoardo-giudici-saraval-hggist5htgg-unsplash.jpg",
"width": 5304,
"height": 2983,
"size": 1863640,
"extension": "jpg",
"cropUrl": "/media/uwzinx3p/edoardo-giudici-saraval-hggist5htgg-unsplash.jpg?width=5304&height=2983&v=1dbb85caea766b0",
"altText": ""
},
"showCompleteImage": true,
"text": "",
"caption": "",
"caption__obsolete": "Use the 'text' property instead."
},
{
"image": {
"id": 1446,
"key": "e434ffa2-ee87-4ceb-888a-dfba4a0ec33b",
"type": "image",
"name": "Joseph Gonzalez Ifgrcqhznqg Unsplash",
"url": "/media/ut5djzeh/joseph-gonzalez-ifgrcqhznqg-unsplash.jpg",
"width": 3569,
"height": 5354,
"size": 2356414,
"extension": "jpg",
"cropUrl": "/media/ut5djzeh/joseph-gonzalez-ifgrcqhznqg-unsplash.jpg?width=3569&height=5354&v=1dbb85caf056530",
"altText": ""
},
"showCompleteImage": true,
"text": "",
"caption": "",
"caption__obsolete": "Use the 'text' property instead."
},
{
"image": {
"id": 1431,
"key": "fdc4265f-0ed3-464e-9836-7c60b2e48678",
"type": "image",
"name": "A couple of legos that are sitting on a table",
"url": "/media/letmj5ot/montironi-valentino-0re0j1vhvzo-unsplash.jpg",
"width": 1920,
"height": 1280,
"size": 392718,
"extension": "jpg",
"cropUrl": "/media/letmj5ot/montironi-valentino-0re0j1vhvzo-unsplash.jpg?width=1920&height=1280&v=1dbb85c7d108be0",
"altText": "",
"attribution": "Montironi Valentino @ Unsplash"
},
"showCompleteImage": true,
"text": "",
"caption": "",
"caption__obsolete": "Use the 'text' property instead."
}
]
},
"settings": {
"includeInToc": true
}
}
],
"meta": {
"title": "Forside - Slagelse Intranet",
"htmlAttrs": {
"lang": "da-DK"
},
"link": [
{
"hid": "canonical",
"rel": "canonical",
"href": "https://dev-10327sl-fe.testserver.nu/da/"
}
],
"meta": [
{
"hid": "description",
"name": "description",
"content": ""
},
{
"hid": "robots",
"name": "robots",
"content": "noindex, nofollow"
},
{
"hid": "0cd7b7c3",
"property": "og:title",
"content": "Forside - Slagelse Intranet"
},
{
"hid": "6974a09d",
"property": "og:site_name",
"content": "intra.slagelse.dk"
},
{
"hid": "80f48865",
"property": "og:url",
"content": "https://dev-10327sl-fe.testserver.nu/da/forside/"
},
{
"hid": "6a96581e",
"name": "twitter:card",
"content": "summary"
},
{
"hid": "2a735453",
"name": "twitter:site",
"content": "intra.slagelse.dk"
},
{
"hid": "01c11f81",
"name": "twitter:title",
"content": "Forside - Slagelse Intranet"
}
]
},
"template": "FrontPage",
"createDate": "2025-04-25T23:20:16.643+02:00",
"updateDate": "2025-09-26T09:01:14.407+02:00",
"frontend": {
"add": [
{
"endpointUrl": "/api/citi/frontend/b7cc4857-2758-463b-81ac-16f32416715d/children",
"type": "slIntraContentPage",
"name": "Opret indholdsside",
"fields": [
{
"type": "text",
"name": "title",
"label": "Overskrift",
"required": true
},
{
"type": "text",
"name": "teaser",
"label": "Manchet",
"maxlength": 150
},
{
"type": "file",
"name": "introImage",
"label": "Topbillede",
"files": [],
"value": ""
},
{
"type": "rte",
"name": "frontendText",
"label": "Brødtekst",
"required": true
},
{
"type": "text",
"name": "frontendVideo",
"label": "Video",
"helpText": "Understøtter links fra YouTube eller DreamBroker."
},
{
"type": "file",
"name": "frontendFiles",
"label": "Filer",
"multiple": true,
"files": [],
"value": ""
},
{
"type": "email",
"name": "frontendResponsibleEmail",
"label": "Ansvarlig e-mail",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
},
{
"type": "tel",
"name": "frontendResponsiblePhone",
"label": "Ansvarlig telefon",
"helpText": "Overskriver kontaktoplysninger vist under Indholdsansvarlig."
}
]
}
]
},
"favorites": {
"targetType": 0,
"targetKey": "b7cc4857-2758-463b-81ac-16f32416715d"
}
}
};
