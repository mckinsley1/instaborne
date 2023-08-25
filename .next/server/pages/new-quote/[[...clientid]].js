(() => {
var exports = {};
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 7845:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "InstallationRequestForm_btn__hcMNz",
	"timeslot": "InstallationRequestForm_timeslot__B5pBE",
	"peer": "InstallationRequestForm_peer__2d948"
};


/***/ }),

/***/ 9825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ComplementaryInformation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _data_ev_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2496);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ComplementaryInformation({ employeesData  }) {
    const { register , formState: { errors  } , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    const modelsJson = JSON.stringify((0,lodash__WEBPACK_IMPORTED_MODULE_5__.uniq)(_data_ev_data_json__WEBPACK_IMPORTED_MODULE_4__/* .data.map */ .aT.map((car)=>car.brand)));
    const carBrands = [
        ...JSON.parse(modelsJson)
    ];
    const [selectedCarBrand, setSelectedCarBrand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(carBrands[0]);
    const [selectedBrandModels, setSelectedBrandModels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,lodash__WEBPACK_IMPORTED_MODULE_5__.uniq)(_data_ev_data_json__WEBPACK_IMPORTED_MODULE_4__/* .data.filter */ .aT.filter((car)=>car.brand === selectedCarBrand).map((car, i)=>car.model)));
    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sellers, setSellers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showComissionSection, setShowComissionSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEmpty(employeesData)) {
            setShowComissionSection(true);
            setSellers(employeesData.filter((employee)=>employee.EMPLOYEE_TYPE === "Agent").map((employee)=>`${employee.FIRST_NAME} ${employee.LAST_NAME}`));
            setDirectors(employeesData.filter((employee)=>employee.EMPLOYEE_TYPE === "Director").map((employee)=>`${employee.FIRST_NAME} ${employee.LAST_NAME}`));
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        className: "py-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "space-y-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-b border-gray-900/10 pb-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-semibold leading-7 text-gray-900 items-stretch",
                        children: "Informations compl\xe9mentaires"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 text-md leading-6 text-gray-600 max-w-6xl invisible",
                        children: "Afin que nous puissions vous identifier, cr\xe9er votre dossier et entrer en contact avec vous, nous avons besoin de r\xe9colter quelques informations personnelles."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "CAR_BRAND",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Marque du v\xe9hicule"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            ...register("CAR_BRAND", {
                                                required: true
                                            }),
                                            id: "CAR_BRAND",
                                            name: "CAR_BRAND",
                                            onChange: (event)=>{
                                                setSelectedCarBrand(event.target.value);
                                                setSelectedBrandModels((0,lodash__WEBPACK_IMPORTED_MODULE_5__.uniq)(_data_ev_data_json__WEBPACK_IMPORTED_MODULE_4__/* .data.filter */ .aT.filter((car)=>car.brand === event.target.value).map((car, i)=>car.model)));
                                            },
                                            className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                            children: carBrands.map((brand, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: brand,
                                                    children: brand
                                                }, i))
                                        })
                                    }),
                                    errors.CAR_BRAND ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisir la marque du v\xe9hicule"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "CAR_MODEL",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Modele du v\xe9hicule"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            ...register("CAR_MODEL", {
                                                required: true
                                            }),
                                            id: "CAR_MODEL",
                                            name: "CAR_MODEL",
                                            className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                            children: selectedBrandModels.map((model, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: model,
                                                    children: model
                                                }, i))
                                        })
                                    }),
                                    errors.CAR_MODEL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisir le mod\xe8le du v\xe9hicule"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "CAR_YEAR",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Ann\xe9e du v\xe9hicule"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("CAR_YEAR", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "CAR_YEAR",
                                            id: "CAR_YEAR",
                                            autoComplete: "family-name",
                                            placeholder: "Tapez l'ann\xe9e du v\xe9hicule",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.CAR_YEAR ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer l'ann\xe9e du v\xe9hicule"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "STOCK_NUMBER",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "N\xb0 de stock"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("STOCK_NUMBER", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "STOCK_NUMBER",
                                            id: "STOCK_NUMBER",
                                            placeholder: "Tapez le num\xe9ro de stock",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.STOCK_NUMBER ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer un N\xb0 de stock"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "VIN_NUMBER",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "N\xb0 de VIN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("VIN_NUMBER", {
                                                maxLength: 17,
                                                required: true
                                            }),
                                            type: "text",
                                            name: "VIN_NUMBER",
                                            id: "VIN_NUMBER",
                                            autoComplete: "family-name",
                                            placeholder: "Tapez le num\xe9ro de VIN",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.VIN_NUMBER ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer un N\xb0 de VIN"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "HAS_BORNE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "\xcates-vous en possession de borne de recharge ?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-span-6 ",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ...register("HAS_BORNE", {
                                                                        required: true
                                                                    }),
                                                                    id: "HAS_BORNE_RADIO_1",
                                                                    type: "radio",
                                                                    value: "true",
                                                                    name: "HAS_BORNE",
                                                                    className: "w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "HAS_BORNE_RADIO_1",
                                                                    className: "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                    children: "Oui"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ...register("HAS_BORNE", {
                                                                        required: true
                                                                    }),
                                                                    id: "HAS_BORNE_RADIO_2",
                                                                    type: "radio",
                                                                    value: "false",
                                                                    name: "HAS_BORNE",
                                                                    className: "w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "HAS_BORNE_RADIO_2",
                                                                    className: "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                    children: "Non"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    errors.HAS_BORNE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisir une option"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "BORNE_DELIVERY_COMPANY",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Vous attendez une livraison de :"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("BORNE_DELIVERY_COMPANY"),
                                            id: "BORNE_DELIVERY_COMPANY",
                                            name: "BORNE_DELIVERY_COMPANY",
                                            placeholder: "Tapez le nom de la compagnie",
                                            className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 placeholder:text-gray-400 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "BORNE_DELIVERY_DATE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Date de livraison"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                            control: control,
                                            name: "BORNE_DELIVERY_DATE",
                                            rules: {
                                                required: true
                                            },
                                            render: ({ field: { onChange , onBlur , value , ref  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    onChange: onChange,
                                                    onBlur: onBlur,
                                                    selected: value,
                                                    value: value,
                                                    minDate: new Date(),
                                                    popperPlacement: "bottom",
                                                    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                                })
                                        })
                                    }),
                                    errors.BORNE_DELIVERY_DATE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisir une date de livraison"
                                    }) : ""
                                ]
                            }),
                            showComissionSection ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:col-span-3 sm:col-start-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "REFERRER",
                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Directeur de finances"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    ...register("REFERRER", {
                                                        required: true
                                                    }),
                                                    id: "REFERRER",
                                                    name: "REFERRER",
                                                    className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                                    children: directors.map((director, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: director,
                                                            children: director
                                                        }, i))
                                                })
                                            }),
                                            errors.REFERRER ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "pt-2 text-red-500",
                                                children: "Veuillez entrer le directeur de finances"
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:col-span-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "SELLER",
                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Vendeur"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    ...register("SELLER", {
                                                        required: true
                                                    }),
                                                    id: "SELLER",
                                                    name: "SELLER",
                                                    className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                                    children: sellers.map((seller, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: seller,
                                                            children: seller
                                                        }, i))
                                                })
                                            }),
                                            errors.SELLER ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "pt-2 text-red-500",
                                                children: "Veuillez entrer le vendeur"
                                            }) : ""
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:col-span-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "REFERRER",
                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                children: "R\xe9ference"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("REFERRER"),
                                                    name: "REFERRER",
                                                    id: "REFERRER",
                                                    placeholder: "Tapez le nom de votre r\xe9ference",
                                                    className: "block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary px-2 sm:py-1.5 sm:text-sm sm:leading-6",
                                                    defaultValue: ""
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:col-span-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "PROMO_CODE",
                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Code promotionel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("PROMO_CODE"),
                                                    name: "PROMO_CODE",
                                                    id: "PROMO_CODE",
                                                    placeholder: "Tapez votre code promotionel",
                                                    className: "block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary px-2 sm:py-1.5 sm:text-sm sm:leading-6",
                                                    defaultValue: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "ADDITIONNAL_NOTE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Avez-vous un message \xe0 nous transmettre concernant les informations compl\xe9mentaires ?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            ...register("ADDITIONNAL_NOTE"),
                                            rows: 4,
                                            name: "ADDITIONNAL_NOTE",
                                            id: "ADDITIONNAL_NOTE",
                                            placeholder: "Tapez votre message",
                                            className: "block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6",
                                            defaultValue: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function FormComplete() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col text-center py-40 space-y-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl font-bold text-black",
                    children: "Votre rendez-vous a \xe9t\xe9 valid\xe9 !"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-md text-black",
                    children: "Vous recevrez sous peu un courriel indiquant que votre rendez-vous a \xe9t\xe9 confirm\xe9. Veuillez v\xe9rifier votre bo\xeete de r\xe9ception pour trouver les informations dont vous avez besoin. Si vous avez des questions n'h\xe9sitez pas \xe0 nous contacter par courriel ou t\xe9l\xe9phone."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "Retourner a l'acceuil"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormComplete);


/***/ }),

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Greeting({ logo_url , name  }) {
    const [clientName, setClientName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [clientLogo, setClientLogo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (name != undefined && logo_url != undefined) {
            setClientName(name);
            setClientLogo(logo_url);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-24 pb-8",
        children: [
            clientName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-black pt-12 text-md mb-3",
                children: clientName
            }) : "",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inline-flex gap-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/logodark.svg",
                        width: 400,
                        height: 300,
                        alt: ""
                    }),
                    clientLogo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: clientLogo,
                        width: 300,
                        height: 200,
                        alt: ""
                    }) : ""
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-black pt-12 text-2xl",
                children: [
                    "Les experts dans le service d'installation de borne de recharge pour votre v\xe9hicule \xe9lectrique. Pour une",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-bold",
                        children: "ESTIMATION GRATUITE"
                    }),
                    ", nous vous prions de remplir notre formulaire en ligne en 4 \xe9tapes rapides."
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greeting);


/***/ }),

/***/ 7571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function InstallationLocation() {
    const { register , getValues , formState: { errors  } , clearErrors  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [postalCode, setPostalCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [province, setProvince] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSameAddress, setIsSameAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isSameAddress) {
            clearErrors;
        }
    }, [
        isSameAddress
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sm:col-span-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-semibold leading-7 text-gray-900",
                            children: "Lieu de votre installation"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-4 text-md leading-6 text-gray-600 max-w-6xl",
                            children: "Afin que nous puissions \xe9valuer les normes applicables li\xe9es a votre structure et environnement nous avons besoins d’informations sur le dans lequel votre borne sera install\xe9e."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "border-b border-gray-900/10 pb-12 space-y-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sm:col-span-6 w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-1 pt-10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "w-full gap-6 grid sm:grid-cols-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register("INSTALLATION_BUILDING_TYPE", {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        id: "INSTALLATION_BUILDING_HOME",
                                                        name: "INSTALLATION_BUILDING_TYPE",
                                                        value: "home",
                                                        className: "hidden peer"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "INSTALLATION_BUILDING_HOME",
                                                        className: "flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/homeIcon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-full text-lg font-semibold text-center",
                                                                children: "Maison"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register("INSTALLATION_BUILDING_TYPE", {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        id: "INSTALLATION_BUILDING_COPROPRETY",
                                                        name: "INSTALLATION_BUILDING_TYPE",
                                                        value: "coproprety",
                                                        className: "hidden peer"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "INSTALLATION_BUILDING_COPROPRETY",
                                                        className: "flex flex-col text-center items-center justify-between w-full p-5 aria-required:border-red-200 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/coproprieteIcon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-full text-lg font-semibold text-center",
                                                                children: "Copropri\xe9t\xe9"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register("INSTALLATION_BUILDING_TYPE", {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        id: "INSTALLATION_BUILDING_ENTEPRISE",
                                                        name: "INSTALLATION_BUILDING_TYPE",
                                                        value: "enteprise",
                                                        className: "hidden peer"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "INSTALLATION_BUILDING_ENTEPRISE",
                                                        className: "flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/entrepriseIcon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-full text-lg font-semibold text-center",
                                                                children: "Entreprise"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register("INSTALLATION_BUILDING_TYPE", {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        id: "INSTALLATION_BUILDING_OTHER",
                                                        name: "INSTALLATION_BUILDING_TYPE",
                                                        value: "other",
                                                        className: "hidden peer"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "INSTALLATION_BUILDING_OTHER",
                                                        className: "flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/autreIcon.svg"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-full text-lg font-semibold text-center",
                                                                children: "Autre"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    errors.INSTALLATION_BUILDING_TYPE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisir un type d'installation"
                                    }) : ""
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-6 gap-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-6 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-sm text-black py-4",
                                            children: "Quelle est l'adresse ou sera effectuer l'installation ?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex gap-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            ...register("INSTALLATION_ADDRESS_SAME", {
                                                                required: true
                                                            }),
                                                            onChange: ()=>{
                                                                setIsSameAddress(true);
                                                                clearErrors();
                                                            },
                                                            id: "INSTALLATION_ADDRESS_RADIO_1",
                                                            type: "radio",
                                                            value: "true",
                                                            name: "INSTALLATION_ADDRESS_SAME",
                                                            className: "w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-[#02B5A1] dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "INSTALLATION_ADDRESS_RADIO_1",
                                                            className: "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                            children: "M\xeame adresse"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            ...register("INSTALLATION_ADDRESS_SAME", {
                                                                required: true
                                                            }),
                                                            onChange: ()=>setIsSameAddress(false),
                                                            id: "INSTALLATION_ADDRESS_RADIO_2",
                                                            type: "radio",
                                                            value: "false",
                                                            name: "INSTALLATION_ADDRESS_SAME",
                                                            className: "w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-[#02B5A1] dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "INSTALLATION_ADDRESS_RADIO_2",
                                                            className: "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                            children: "Addresse differente"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        errors.INSTALLATION_ADDRESS_SAME ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "pt-2 text-red-500",
                                            children: "Veuillez choisir une option"
                                        }) : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "INSTALLATION_ADDRESS",
                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Adresse"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("INSTALLATION_ADDRESS", {
                                                    required: !isSameAddress
                                                }),
                                                type: "text",
                                                name: "INSTALLATION_ADDRESS",
                                                id: "INSTALLATION_ADDRESS",
                                                placeholder: "Tapez l’adresse de votre lieu d’installation",
                                                value: isSameAddress ? getValues("ADDRESS") : address,
                                                onChange: (e)=>setAddress(e.currentTarget.value),
                                                disabled: isSameAddress,
                                                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 disabled:bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            })
                                        }),
                                        errors.INSTALLATION_ADDRESS ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "pt-2 text-red-500",
                                            children: "Veuillez entrer une address valide"
                                        }) : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "INSTALLATION_CITY",
                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Ville"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("INSTALLATION_CITY", {
                                                    required: !isSameAddress
                                                }),
                                                type: "text",
                                                name: "INSTALLATION_CITY",
                                                id: "INSTALLATION_CITY",
                                                placeholder: "Tapez la ville",
                                                value: isSameAddress ? getValues("CITY") : city,
                                                onChange: (e)=>setCity(e.currentTarget.value),
                                                disabled: isSameAddress,
                                                className: "block w-full rounded-md border-0 py-1.5 disabled:bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            })
                                        }),
                                        errors.INSTALLATION_CITY ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "pt-2 text-red-500",
                                            children: "Veuillez entrer une ville valide"
                                        }) : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "INSTALLATION_STATE",
                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Province"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                ...register("INSTALLATION_STATE", {
                                                    required: !isSameAddress
                                                }),
                                                id: "INSTALLATION_STATE",
                                                name: "INSTALLATION_STATE",
                                                value: isSameAddress ? getValues("STATE") : province,
                                                onChange: (e)=>setProvince(e.currentTarget.value),
                                                disabled: isSameAddress,
                                                defaultValue: "QC",
                                                className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 disabled:bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "AB",
                                                        children: "AB"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "BC",
                                                        children: "BC"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NL",
                                                        children: "NL"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "PE",
                                                        children: "PE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NS",
                                                        children: "NS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NB",
                                                        children: "NB"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "ON",
                                                        children: "ON"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "MB",
                                                        children: "MB"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "SK",
                                                        children: "SK"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "YT",
                                                        children: "YT"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NT",
                                                        children: "NT"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "QC",
                                                        children: "QC"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NU",
                                                        children: "NU"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "INSTALLATION_POSTAL_CODE",
                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Code postal"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("INSTALLATION_POSTAL_CODE", {
                                                    required: !isSameAddress,
                                                    pattern: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
                                                }),
                                                type: "text",
                                                name: "INSTALLATION_POSTAL_CODE",
                                                id: "INSTALLATION_POSTAL_CODE",
                                                placeholder: "Tapez le code postal",
                                                value: isSameAddress ? getValues("POSTAL_CODE") : postalCode,
                                                onChange: (e)=>setPostalCode(e.currentTarget.value),
                                                disabled: isSameAddress,
                                                className: "block w-full rounded-md border-0 py-1.5 disabled:bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            })
                                        }),
                                        errors.INSTALLATION_POSTAL_CODE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "pt-2 text-red-500",
                                            children: "Veuillez entrer un code postal valide"
                                        }) : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "INSTALLATION_MESSAGE",
                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Avez-vous un message \xe0 nous transmettre concernant le lieu d'installation ?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                ...register("INSTALLATION_MESSAGE"),
                                                name: "INSTALLATION_MESSAGE",
                                                id: "INSTALLATION_MESSAGE",
                                                rows: 4,
                                                placeholder: "Tapez votre message",
                                                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstallationLocation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMultiStepForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8291);
/* harmony import */ var _InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7845);
/* harmony import */ var _InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PersonalInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7213);
/* harmony import */ var _Greeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2606);
/* harmony import */ var _ComplementaryInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9825);
/* harmony import */ var _InstallationLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7571);
/* harmony import */ var _ScheduleInstallation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3843);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormComplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5742);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PersonalInformation__WEBPACK_IMPORTED_MODULE_3__, _ComplementaryInformation__WEBPACK_IMPORTED_MODULE_5__, _InstallationLocation__WEBPACK_IMPORTED_MODULE_6__, _ScheduleInstallation__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_11__]);
([_PersonalInformation__WEBPACK_IMPORTED_MODULE_3__, _ComplementaryInformation__WEBPACK_IMPORTED_MODULE_5__, _InstallationLocation__WEBPACK_IMPORTED_MODULE_6__, _ScheduleInstallation__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function InstallationRequestForm(props) {
    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9__.createClient)("https://ompbzscchlcpidhbipvn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGJ6c2NjaGxjcGlkaGJpcHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODkyNTQsImV4cCI6MTk5ODA2NTI1NH0.LErv48wGnFPrOamMSqiGV9uFuZjZ3UFmQ01tPzLrb9Q");
    const { steps , currentStepIndex , step , isFirstStep , isLastStep , back , next  } = (0,_useMultiStepForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Greeting__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            name: props.dealershipData[0]?.NAME,
            logo_url: props.dealershipData[0]?.LOGO_URL
        }, 1),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PersonalInformation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}, 2),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InstallationLocation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}, 3),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ComplementaryInformation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            employeesData: props.employeesData
        }, 4),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScheduleInstallation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}, 5),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComplete__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}, 6)
    ]);
    const { handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useFormContext)();
    const onSubmitNext = ()=>{
        next();
        window.scrollTo(0, 0);
    };
    const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onFinalSubmit = async (data)=>{
        setSending(true);
        console.log("data", data);
        const { error  } = await supabase.from("FORM_QUOTE").insert({
            FIRST_NAME: data.FIRST_NAME,
            LAST_NAME: data.LAST_NAME,
            EMAIL: data.EMAIL,
            PHONE: data.PHONE,
            ADDRESS: data.ADDRESS,
            CITY: data.CITY,
            POSTAL_CODE: data.POSTAL_CODE,
            STATE: data.STATE,
            CAR_BRAND: data.CAR_BRAND,
            CAR_MODEL: data.CAR_MODEL,
            CAR_YEAR: data.CAR_YEAR,
            BORNE_DELIVERY_DATE: data.BORNE_DELIVERY_DATE,
            BORNE_DELIVERY_COMPANY: data.BORNE_DELIVERY_COMPANY,
            REFERRER: data.REFERRER,
            PROMO_CODE: data.PROMO_CODE,
            HAS_BORNE: data.HAS_BORNE,
            INSTALLATION_ADDRESS_SAME: data.INSTALLATION_ADDRESS_SAME,
            INSTALLATION_ADDRESS: data.INSTALLATION_ADDRESS,
            INSTALLATION_CITY: data.INSTALLATION_CITY,
            INSTALLATION_DATE: data.INSTALLATION_DATE,
            INSTALLATION_MESSAGE: data.INSTALLATION_MESSAGE,
            INSTALLATION_POSTAL_CODE: data.INSTALLATION_POSTAL_CODE,
            INSTALLATION_STATE: data.INSTALLATION_STATE,
            INSTALLATION_BUILDING_TYPE: data.INSTALLATION_BUILDING_TYPE,
            ADDITIONNAL_NOTE: data.ADDITIONNAL_NOTE,
            SELLER: data.SELLER,
            STOCK_NUMBER: data.STOCK_NUMBER,
            VIN_NUMBER: data.VIN_NUMBER,
            SUBMISSION_NUMBER: Date.now()
        });
        let request = {
            FIRST_NAME: data.FIRST_NAME,
            LAST_NAME: data.LAST_NAME,
            EMAIL: data.EMAIL,
            PHONE: data.PHONE,
            ADDRESS: data.ADDRESS,
            CITY: data.CITY,
            POSTAL_CODE: data.POSTAL_CODE,
            STATE: data.STATE,
            CAR_BRAND: data.CAR_BRAND,
            CAR_MODEL: data.CAR_MODEL,
            CAR_YEAR: data.CAR_YEAR,
            BORNE_DELIVERY_DATE: data.BORNE_DELIVERY_DATE,
            BORNE_DELIVERY_COMPANY: data.BORNE_DELIVERY_COMPANY,
            PROMO_CODE: data.PROMO_CODE,
            REFERRER: data.REFERRER,
            HAS_BORNE: data.HAS_BORNE,
            INSTALLATION_ADDRESS_SAME: data.INSTALLATION_ADDRESS_SAME,
            INSTALLATION_ADDRESS: data.INSTALLATION_ADDRESS,
            INSTALLATION_CITY: data.INSTALLATION_CITY,
            INSTALLATION_DATE: data.INSTALLATION_DATE,
            INSTALLATION_MESSAGE: data.INSTALLATION_MESSAGE,
            INSTALLATION_POSTAL_CODE: data.INSTALLATION_POSTAL_CODE,
            INSTALLATION_STATE: data.INSTALLATION_STATE,
            INSTALLATION_BUILDING_TYPE: data.INSTALLATION_BUILDING_TYPE,
            ADDITIONNAL_NOTE: data.ADDITIONNAL_NOTE,
            SELLER: data.SELLER,
            STOCK_NUMBER: data.STOCK_NUMBER,
            VIN_NUMBER: data.VIN_NUMBER,
            SUBMISSION_NUMBER: Date.now()
        };
        axios__WEBPACK_IMPORTED_MODULE_11__["default"].post("/api/sendInstallationRequestForm", request).then((response)=>{
        //console.log(response.data); 
        }).catch((error)=>{
            if (error) {
            //console.log(error);
            }
        });
        setSending(false);
        if (!error) {
            next();
            reset();
        } else if (error) {
            alert(error.message);
        }
    };
    const ConfirmButton = ()=>{
        return sending ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            disabled: true,
            type: "button",
            className: "text-white bg-primary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-primary dark:hover:bg-secondary/50 inline-flex items-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    "aria-hidden": "true",
                    role: "status",
                    className: "inline w-4 h-4 mr-3 text-white animate-spin",
                    viewBox: "0 0 100 101",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "#E5E7EB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentColor"
                        })
                    ]
                }),
                "En cours..."
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handleSubmit(onFinalSubmit),
            type: "submit",
            className: (_InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
            children: "Confirmer et terminer"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white place-items-center place-content-center place-self-center align-middle px-8 pt-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
                currentStepIndex == 0 ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: !isLastStep ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-black",
                        children: [
                            "\xc9tape ",
                            currentStepIndex,
                            " / ",
                            steps.length - 2
                        ]
                    }) : ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "place-self-center",
                    children: step
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-between pt-4",
                    children: isLastStep ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            !isFirstStep && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                id: "btnFormPrevious",
                                onClick: back,
                                className: (_InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
                                children: "Pr\xe9c\xe9dent"
                            }),
                            currentStepIndex == steps.length - 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmButton, {}) : !isFirstStep && !(currentStepIndex == 4) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "btnFormNext",
                                type: "submit",
                                onClick: handleSubmit(onSubmitNext),
                                className: (_InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
                                children: "Suivant"
                            }) : isFirstStep && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: next,
                                type: "button",
                                id: "btnFormStart",
                                className: (_InstallationRequestForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
                                children: "C'est Parti"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstallationRequestForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PersonalInformation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function PersonalInformation() {
    const { register , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        className: "bg-white place-self-center py-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "space-y-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-b border-gray-900/10 pb-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-semibold leading-7 text-gray-900",
                        children: "Informations du client"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 text-md leading-6 text-gray-600 max-w-6xl",
                        children: "Afin que nous puissions vous identifier, cr\xe9er votre dossier et entrer en contact avec vous, nous avons besoin de r\xe9colter quelques informations personnelles."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "FIRST_NAME",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Pr\xe9nom"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("FIRST_NAME", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "FIRST_NAME",
                                            id: "FIRST_NAME",
                                            placeholder: "Tapez votre pr\xe9nom",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.FIRST_NAME ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer votre pr\xe9nom"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "LAST_NAME",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Nom"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("LAST_NAME", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "LAST_NAME",
                                            id: "LAST_NAME",
                                            placeholder: "Tapez votre nom",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.LAST_NAME ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer votre nom de famille"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "EMAIL",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Courriel"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("EMAIL", {
                                                required: true,
                                                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                            }),
                                            id: "EMAIL",
                                            name: "EMAIL",
                                            type: "EMAIL",
                                            placeholder: "Tapez votre adresse courriel",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.EMAIL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer un courriel valide ex: John.smith@gmail.com"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "PHONE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "N\xb0 de t\xe9l\xe9phone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("PHONE", {
                                                required: true,
                                                pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm
                                            }),
                                            id: "PHONE",
                                            name: "PHONE",
                                            type: "tel",
                                            placeholder: "Tapez votre num\xe9ro de t\xe9l\xe9phone",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.PHONE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer un t\xe9l\xe9phone valide"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "ADDRESS",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Adresse"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("ADDRESS", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "ADDRESS",
                                            id: "ADDRESS",
                                            placeholder: "Tapez votre adresse",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.ADDRESS ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer votre address"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2 sm:col-start-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "CITY",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Ville"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("CITY", {
                                                required: true
                                            }),
                                            type: "text",
                                            name: "CITY",
                                            id: "CITY",
                                            placeholder: "Tapez votre ville",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.CITY ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer votre ville"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "STATE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Province"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            ...register("STATE", {
                                                required: true
                                            }),
                                            id: "STATE",
                                            name: "STATE",
                                            defaultValue: "QC",
                                            className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AB",
                                                    children: "AB"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "BC",
                                                    children: "BC"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "NL",
                                                    children: "NL"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "PE",
                                                    children: "PE"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "NS",
                                                    children: "NS"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "NB",
                                                    children: "NB"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ON",
                                                    children: "ON"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "MB",
                                                    children: "MB"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "SK",
                                                    children: "SK"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "YT",
                                                    children: "YT"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "NT",
                                                    children: "NT"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "QC",
                                                    children: "QC"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "NU",
                                                    children: "NU"
                                                })
                                            ]
                                        })
                                    }),
                                    errors.PROVINCE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez choisire une province"
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "POSTAL_CODE",
                                        className: "block text-sm font-medium leading-6 text-gray-900",
                                        children: "Code postale"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("POSTAL_CODE", {
                                                required: true,
                                                pattern: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
                                            }),
                                            type: "text",
                                            name: "POSTAL_CODE",
                                            id: "POSTAL_CODE",
                                            placeholder: "EX: H3M2X2",
                                            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        })
                                    }),
                                    errors.POSTAL_CODE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-2 text-red-500",
                                        children: "Veuillez entrer un code postale valide."
                                    }) : ""
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ScheduleInstallation() {
    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)("https://ompbzscchlcpidhbipvn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGJ6c2NjaGxjcGlkaGJpcHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODkyNTQsImV4cCI6MTk5ODA2NTI1NH0.LErv48wGnFPrOamMSqiGV9uFuZjZ3UFmQ01tPzLrb9Q");
    const { control , getValues , watch , setValue , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object);
    const [excludedTimes, setExcludedTimes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const tommorow = ()=>{
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    };
    const defaultExcludedTimes = [
        new Date(0, 0, 0),
        new Date(0, 0, 0, 2),
        new Date(0, 0, 0, 4),
        new Date(0, 0, 0, 6),
        new Date(0, 0, 0, 20),
        new Date(0, 0, 0, 22)
    ];
    const fridayDefaultExcludedTimes = [
        new Date(0, 0, 0),
        new Date(0, 0, 0, 2),
        new Date(0, 0, 0, 4),
        new Date(0, 0, 0, 6),
        new Date(0, 0, 0, 18),
        new Date(0, 0, 0, 20),
        new Date(0, 0, 0, 22)
    ];
    const saturdayDefaultExcludedTimes = [
        new Date(0, 0, 0),
        new Date(0, 0, 0, 2),
        new Date(0, 0, 0, 4),
        new Date(0, 0, 0, 6),
        new Date(0, 0, 0, 14),
        new Date(0, 0, 0, 16),
        new Date(0, 0, 0, 18),
        new Date(0, 0, 0, 20),
        new Date(0, 0, 0, 22)
    ];
    async function checkAvailableDates(currentlySelectedDate) {
        let { data: INSTALLATION_DATES , error  } = await supabase.from("FORM_QUOTE").select("INSTALLATION_DATE");
        const daysWithBookings = INSTALLATION_DATES?.filter((date)=>new Date(date.INSTALLATION_DATE).toLocaleDateString() === new Date(currentlySelectedDate).toLocaleDateString());
        const excluTimes = daysWithBookings?.map((date)=>new Date(date.INSTALLATION_DATE).getTime());
        // if selected date is a friday
        if (currentlySelectedDate.getDay() === 5) {
            setExcludedTimes([
                ...fridayDefaultExcludedTimes,
                ...excluTimes
            ]);
        } else if (currentlySelectedDate.getDay() === 6) {
            setExcludedTimes([
                ...saturdayDefaultExcludedTimes,
                ...excluTimes
            ]);
        } else setExcludedTimes([
            ...defaultExcludedTimes,
            ...excluTimes
        ]) // any other day of the week
        ;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFormValues(getValues());
        setValue("INSTALLATION_DATE", tommorow());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkAvailableDates(watch("INSTALLATION_DATE"));
    }, [
        watch("INSTALLATION_DATE")
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "py-12 gap-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sm:col-span-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-3xl font-semibold leading-7 text-gray-900",
                        children: "Programmez votre rendez-vous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 text-md leading-6 text-gray-600 max-w-7xl",
                        children: "Il ne vous reste plus qu'a programmer l'heure et la date \xe0 laquelle vous souhaitez que notre expert vous rencontre pour estimer et \xe9valuer votre future installation."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-2 mt-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-bold py-2",
                                children: "S\xe9lectionnez le jour du rendez-vous"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                control: control,
                                name: "INSTALLATION_DATE",
                                rules: {
                                    required: true
                                },
                                render: ({ field: { onChange , onBlur , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        adjustDateOnChange: true,
                                        onChange: onChange,
                                        onBlur: onBlur,
                                        selected: value,
                                        showTimeSelect: true,
                                        minDate: tommorow(),
                                        inline: true,
                                        timeIntervals: 120,
                                        filterDate: (date)=>date.getDay() !== 0,
                                        excludeTimes: excludedTimes,
                                        calendarClassName: "drop-shadow-lg"
                                    })
                            }),
                            errors.INSTALLATION_DATE ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "pt-2 text-red-500",
                                children: "Veuillez choisir une date d'installation "
                            }) : ""
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-4 pt-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg text-black font-bold mb-3",
                                children: "R\xe9capitulatif"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "#",
                                className: "block w-full p-6 bg-[#E6F8F166]/40 border border-[#20D0BD] rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white leading-3",
                                        children: "Votre prochain rendez-vous"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white",
                                        children: watch("INSTALLATION_DATE") == null ? "" : (0,lodash__WEBPACK_IMPORTED_MODULE_5__.capitalize)(new Date(watch("INSTALLATION_DATE")).toLocaleDateString("fr-CA", {
                                            dateStyle: "full"
                                        }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-normal text-gray-700 dark:text-gray-400",
                                        children: "Notre expert Instaborne viendra faire une estimation sur le lieu d'installation suivant :"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: formValues.INSTALLATION_ADDRESS_SAME === "true" ? `${formValues.ADDRESS}, ${formValues.CITY}, ${formValues.STATE}, ${formValues.POSTAL_CODE}` : `${formValues.INSTALLATION_ADDRESS}, ${formValues.INSTALLATION_CITY}, ${formValues.INSTALLATION_STATE}, ${formValues.INSTALLATION_POSTAL_CODE}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleInstallation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    function next() {
        setCurrentStepIndex((i)=>{
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
    }
    function back() {
        setCurrentStepIndex((i)=>{
            if (i <= 0) return i;
            return i - 1;
        });
    }
    function goTo(index) {
        setCurrentStepIndex(index);
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMultiStepForm);


/***/ }),

/***/ 7841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Forms_InstallationRequestForm_InstallationRequestForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7224);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Forms_InstallationRequestForm_InstallationRequestForm__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Forms_InstallationRequestForm_InstallationRequestForm__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function FormGlobalContext({ children  }) {
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, {
        ...methods,
        children: children
    });
}
function NewQuote({ employeesData , dealerData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pb-12 bg-white min-h-screen flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormGlobalContext, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Forms_InstallationRequestForm_InstallationRequestForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                dealershipData: dealerData,
                employeesData: employeesData
            })
        })
    });
}
async function getServerSideProps({ params  }) {
    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)("https://ompbzscchlcpidhbipvn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGJ6c2NjaGxjcGlkaGJpcHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODkyNTQsImV4cCI6MTk5ODA2NTI1NH0.LErv48wGnFPrOamMSqiGV9uFuZjZ3UFmQ01tPzLrb9Q");
    let dealerData = [];
    let employeesData = {};
    if (!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEmpty(params.clientid)) {
        let { data: DEALERSHIPS  } = await supabase.from("DEALERSHIPS").select("*").eq("NAME_SLUG", params.clientid);
        dealerData = DEALERSHIPS;
        let { data: DEALERSHIP_EMPLOYEES , error  } = await supabase.from("DEALERSHIP_EMPLOYEES").select("*").eq("DEALERSHIP_ID", dealerData[0]?.DEALERSHIP_ID);
        employeesData = DEALERSHIP_EMPLOYEES;
    }
    return {
        props: {
            dealerData,
            employeesData
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewQuote);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2885:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 983:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 2496:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"aT":[{"id":"72475a6a-aae2-da13-1d17-94cc07e5104f","brand":"Aiways","vehicle_type":"car","type":"bev","brand_id":"a43d2607-eead-46c2-9fd5-2ebd3c49d895","model":"U5","release_year":2021,"variant":"","usable_battery_size":63,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":95,"charging_curve":[{"percentage":0,"power":95},{"percentage":18,"power":90},{"percentage":40,"power":90},{"percentage":80,"power":50},{"percentage":100,"power":6.6}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.8}},{"id":"6033b26c-1b3c-441b-9f78-7b7cd5512051","brand":"Aiways","vehicle_type":"car","type":"bev","brand_id":"a43d2607-eead-46c2-9fd5-2ebd3c49d895","model":"U5","release_year":2020,"variant":"","usable_battery_size":63,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":95,"charging_curve":[{"percentage":0,"power":95},{"percentage":18,"power":90},{"percentage":40,"power":90},{"percentage":80,"power":50},{"percentage":100,"power":6.6}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.8}},{"id":"1c9126d4-24d6-4e9f-a49d-15813fa49728","brand":"Artega","vehicle_type":"car","type":"bev","brand_id":"97d0d03a-63c6-4f33-99d7-6e944f71d7c5","model":"Karo","release_year":2020,"variant":"Range Plus","usable_battery_size":14.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":4,"power_per_charging_point":{"11":3.7,"16":4,"22":4,"43":4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":4}},"dc_charger":null,"energy_consumption":{"average_consumption":7.2}},{"id":"d97748b1-e384-4238-a225-d498bccd902c","brand":"Artega","vehicle_type":"car","type":"bev","brand_id":"97d0d03a-63c6-4f33-99d7-6e944f71d7c5","model":"Karo","release_year":2020,"variant":"Range","usable_battery_size":8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":4,"power_per_charging_point":{"11":3.7,"16":4,"22":4,"43":4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":4}},"dc_charger":null,"energy_consumption":{"average_consumption":6.4}},{"id":"3e99e8b9-dcea-755b-2b49-781757dd3946","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q4 Sportback e-tron","release_year":2021,"variant":"35","usable_battery_size":52,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":176}},{"id":"04baeaa4-6bfc-4700-a553-20748aab54be","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q4 Sportback e-tron","release_year":2021,"variant":"50 quattro ","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":35,"power":125},{"percentage":70,"power":65},{"percentage":80,"power":65},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":190}},{"id":"6f9de791-c484-9c22-ba3c-306ace49de76","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q4 e-tron","release_year":2021,"variant":"50 quattro","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":35,"power":125},{"percentage":70,"power":65},{"percentage":80,"power":65},{"percentage":90,"power":35},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":197}},{"id":"0ae12bf4-e82a-622b-f669-2fa7bdf4b2fb","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q4 e-tron","release_year":2021,"variant":"35","usable_battery_size":52,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":182}},{"id":"409a3d54-3dec-b5bb-5d6c-2a48749728c3","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q4 e-tron","release_year":2021,"variant":"","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":35,"power":125},{"percentage":70,"power":62},{"percentage":80,"power":62},{"percentage":90,"power":35},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":188}},{"id":"c6a6bd26-6a8f-4ab7-baf3-6cfa057044e3","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron 50","release_year":2019,"variant":"","usable_battery_size":65,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":124,"charging_curve":[{"percentage":0,"power":110},{"percentage":10,"power":120},{"percentage":20,"power":124},{"percentage":60,"power":124},{"percentage":70,"power":100},{"percentage":80,"power":77},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":22.7}},{"id":"cfaf82d8-0255-4e13-8bf7-2711ed619bfb","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron S","release_year":2020,"variant":"","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":188,"charging_curve":[{"percentage":0,"power":182},{"percentage":40,"power":188},{"percentage":50,"power":154},{"percentage":60,"power":112},{"percentage":75,"power":71},{"percentage":85,"power":42},{"percentage":100,"power":23}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":27}},{"id":"a9a177bf-9ce5-4b67-b3ef-51af248b48c2","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron 55","release_year":2019,"variant":"","usable_battery_size":86.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":155,"charging_curve":[{"percentage":0,"power":137},{"percentage":70,"power":155},{"percentage":72,"power":150},{"percentage":78,"power":120},{"percentage":82,"power":105},{"percentage":100,"power":50}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.4}},{"id":"27d7610e-9a77-498a-b1b5-28d4bc92cbf2","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron 55","release_year":2019,"variant":"22kW-AC","usable_battery_size":86.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":155,"charging_curve":[{"percentage":0,"power":137},{"percentage":70,"power":155},{"percentage":72,"power":150},{"percentage":78,"power":120},{"percentage":82,"power":105},{"percentage":100,"power":50}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.4}},{"id":"059c028d-b2a6-4a8d-947a-158c7537b290","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron 50","release_year":2019,"variant":"22kW-AC","usable_battery_size":65,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":118.8},{"percentage":75,"power":125},{"percentage":100,"power":22}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":22.7}},{"id":"c8e05c0b-05c0-4aac-9f12-35a6a3687e10","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"A3 Sportback 40 e-tron","release_year":2020,"variant":"","usable_battery_size":8.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":12.4}},{"id":"d5719a82-d898-45b5-a8f7-95cd89c9d886","brand":"Audi","vehicle_type":"car","type":"bev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"e-tron S","release_year":2020,"variant":"Sportback","usable_battery_size":86.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":149,"charging_curve":[{"percentage":0,"power":148},{"percentage":30,"power":149},{"percentage":40,"power":144},{"percentage":70,"power":98},{"percentage":85,"power":59},{"percentage":100,"power":27}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":27}},{"id":"0ee859e4-e1d4-4a1c-88bc-acc42ba0d503","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"A6","release_year":2020,"variant":"50 TFSI e","usable_battery_size":14.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"81fabe9c-6f4a-4590-8170-8672cf556342","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"A6","release_year":2020,"variant":"55 TFSI e","usable_battery_size":14.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"dd6918fe-4a13-4420-b6f1-508b0a4f959d","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"A7 55TFSI E","release_year":2019,"variant":"Sportback e quattro","usable_battery_size":14.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":14.1}},{"id":"63028928-53d3-4049-9964-9109ba005599","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q5 55 TFSI","release_year":2019,"variant":"e Quattro","usable_battery_size":14.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"9cb39abb-097d-442c-87e4-1437134898e1","brand":"Audi","vehicle_type":"car","type":"phev","brand_id":"89c2668c-0c50-4344-9386-93e4000f7673","model":"Q7 e-tron","release_year":2020,"variant":"","usable_battery_size":17.3,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"aceb9326-181f-cc73-0467-4c63ee47c0fb","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3S","release_year":2020,"variant":"120 Ah","usable_battery_size":37.9,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.2}},{"id":"e59115ea-4d72-094c-2941-1494f8005ae2","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3","release_year":2020,"variant":"120 Ah","usable_battery_size":37.9,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15.4}},{"id":"65dbdb2c-2dc1-55c8-2c64-52aa1a058bde","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X5","release_year":2020,"variant":"xDrive25e","usable_battery_size":22.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":29.1}},{"id":"afc8b8fa-3bd3-0488-1c5e-3dee70e61eff","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X3","release_year":2020,"variant":"xDrive25e","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":28.4}},{"id":"a616dcbc-4149-0421-9e0b-0dc594a702e0","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X2","release_year":2020,"variant":"xDrive25e","usable_battery_size":8.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":19.1}},{"id":"b322c1ff-4efd-fa27-bb63-6974227c4c91","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X1","release_year":2020,"variant":"xDrive25e","usable_battery_size":8.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":19.7}},{"id":"9685bd64-53aa-4b5f-9322-c04005d11edf","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"745Le","release_year":2020,"variant":"xDrive","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":25.6}},{"id":"70606668-9b9e-a8d7-6c15-e4198f3eb38a","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"745Le","release_year":2020,"variant":"","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":23.3}},{"id":"157486bb-1636-1b35-6382-b6320ab2a80e","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"740 E","release_year":2016,"variant":"","usable_battery_size":7.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"6177d44b-2aae-dc5f-a770-6900b81c91dd","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"545","release_year":2020,"variant":"xDrive Berline","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17.2}},{"id":"01936832-c987-da0e-cbb3-9f6793becdfe","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"530e","release_year":2020,"variant":"xDrive Touring","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":18.5}},{"id":"9587d885-c16c-7465-9a18-59b5d50fd046","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"530e","release_year":2020,"variant":"Touring","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"8be48c23-71fe-04a4-b8e6-36364a3d0cc0","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"530e","release_year":2020,"variant":"xDrive Berline","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17.4}},{"id":"1914d6e6-7d1b-c453-53ac-69a302a6a339","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"530e","release_year":2020,"variant":"Berline","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.3}},{"id":"dda42a87-6ea2-fbb5-7728-f25badd52364","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"330e","release_year":2020,"variant":"xDrive Touring","usable_battery_size":11.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17.2}},{"id":"0efa3174-34f1-bc1d-cd5a-07610fa59c15","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"330e","release_year":2020,"variant":"Touring","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.2}},{"id":"2b04eeba-1de9-9719-adce-0a9df359b329","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"330e","release_year":2020,"variant":"xDrive Berline","usable_battery_size":11.15,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.5}},{"id":"8c3ec01d-8419-6ef6-8411-56b351fb6643","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"330e","release_year":2020,"variant":"berline","usable_battery_size":11.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.5}},{"id":"8653e2d2-5e7d-5172-89ef-71ba177ec0ee","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"330e","release_year":2016,"variant":"","usable_battery_size":12,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"2db395d2-56a0-d1a7-cddb-0b4076071e76","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"225XE","release_year":2020,"variant":"Active Tourer 220 ch","usable_battery_size":8.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":14.5}},{"id":"bed96790-afa0-be7a-015a-55bc42c49894","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"225XE","release_year":2016,"variant":"Serie 2 ActiveTourer","usable_battery_size":10,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"39e0d641-d1c4-0764-16f8-2ff6bc1d97de","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"225XE","release_year":2019,"variant":"10.0 kWh","usable_battery_size":8.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":17}},{"id":"564ce4d8-404c-6840-5bf6-9ffd6a9768ac","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"I8","release_year":2018,"variant":"Roadster","usable_battery_size":9.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":18}},{"id":"555c0b5b-ba1e-741a-27e0-dee32087e2a2","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"iX3","release_year":2020,"variant":"286 ch","usable_battery_size":73.8,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":150,"charging_curve":[{"percentage":0,"power":142.5},{"percentage":75,"power":150},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.6}},{"id":"e67dc450-d658-4bee-bd0f-a750d445b2f9","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3","release_year":null,"variant":"60 Ah","usable_battery_size":18.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":47,"charging_curve":[{"percentage":0,"power":43},{"percentage":30,"power":47},{"percentage":33,"power":44},{"percentage":62,"power":44},{"percentage":100,"power":3}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":14.5}},{"id":"dbf24ffc-3270-409b-b4da-ec386fa36657","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3","release_year":null,"variant":"120 Ah","usable_battery_size":37.9,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":44},{"percentage":85,"power":50},{"percentage":100,"power":3}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"4df1d4d6-f001-4d0a-b284-5ffc07e6ade2","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X5","release_year":2020,"variant":"PHEV","usable_battery_size":21,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":21.3}},{"id":"0ec3f440-136c-49f1-8917-c629a27146c7","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3","release_year":null,"variant":"94 Ah","usable_battery_size":27.2,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":44},{"percentage":60,"power":46},{"percentage":80,"power":50},{"percentage":100,"power":3}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16}},{"id":"cf9d35a6-8c61-44da-97fc-e1212b0f8fbd","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"iX3","release_year":2020,"variant":"","usable_battery_size":74,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":60,"power":118},{"percentage":75,"power":86},{"percentage":100,"power":44}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.5}},{"id":"823d8294-a3b3-40ab-a140-fa1e11e44c4e","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3S","release_year":2019,"variant":"94 Ah REX","usable_battery_size":27.2,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":49,"charging_curve":[{"percentage":0,"power":49},{"percentage":45,"power":46},{"percentage":60,"power":40},{"percentage":80,"power":27},{"percentage":100,"power":14}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"262ae184-9095-41ca-aaa0-9db46869f362","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3S","release_year":2019,"variant":"94 Ah","usable_battery_size":27.2,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":49,"charging_curve":[{"percentage":0,"power":49},{"percentage":45,"power":46},{"percentage":60,"power":40},{"percentage":80,"power":27},{"percentage":100,"power":14}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"2390340c-4405-4ca8-b0a5-1565dc842d5a","brand":"BMW","vehicle_type":"car","type":"bev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"i3S","release_year":2019,"variant":"120 Ah","usable_battery_size":37.9,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":49,"charging_curve":[{"percentage":0,"power":49},{"percentage":45,"power":46},{"percentage":60,"power":40},{"percentage":80,"power":27},{"percentage":100,"power":14}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"5da32d2e-f470-42c0-bf12-1db2336326ab","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X1","release_year":2019,"variant":"xDrive 25e","usable_battery_size":9.7,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":19}},{"id":"ec2fa6bc-3470-4e80-a10f-eecc62321580","brand":"BMW","vehicle_type":"car","type":"phev","brand_id":"0742668c-bf59-4191-890e-2b0883508808","model":"X3","release_year":2019,"variant":"xDrive30e","usable_battery_size":12,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.4}},{"id":"c0217035-4247-877f-43ba-446d583db76c","brand":"CUPRA","vehicle_type":"car","type":"bev","brand_id":"df115651-4cef-01f0-14ef-fdeef60f674c","model":"Born","release_year":2021,"variant":"150 kW - 62 kWh","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":100},{"percentage":70,"power":50},{"percentage":80,"power":50},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":166}},{"id":"a9344438-3cea-e564-5532-969591f070c8","brand":"CUPRA","vehicle_type":"car","type":"bev","brand_id":"df115651-4cef-01f0-14ef-fdeef60f674c","model":"Born","release_year":2022,"variant":"170 kW - 62 kWh","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":100},{"percentage":70,"power":50},{"percentage":80,"power":50},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":168}},{"id":"93754920-4a86-c1e9-7f58-7b183afbdbef","brand":"CUPRA","vehicle_type":"car","type":"bev","brand_id":"df115651-4cef-01f0-14ef-fdeef60f674c","model":"Born","release_year":2021,"variant":"170 kW - 82 kWh","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":35,"power":125},{"percentage":70,"power":65},{"percentage":80,"power":65},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":171}},{"id":"ab631897-9d68-4971-8cbc-b81d0ef2ccaa","brand":"CUPRA","vehicle_type":"car","type":"bev","brand_id":"df115651-4cef-01f0-14ef-fdeef60f674c","model":"Born","release_year":2021,"variant":"110 kW - 55 kWh","usable_battery_size":45,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":164}},{"id":"7508892b-e7e7-42ba-9cca-57753426cd86","brand":"Chevrolet","vehicle_type":"car","type":"bev","brand_id":"cbca5847-9b23-47d9-80d3-24fa9a8ca21a","model":"Spark EV","release_year":2013,"variant":"21 kWh","usable_battery_size":21.3,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.3,"power_per_charging_point":{"11":3.3,"16":3.3,"22":3.3,"43":3.3,"2.0":2,"2.3":2.3,"3.7":3.3,"7.4":3.3}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.3}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16}},{"id":"6a4c5e58-d1cb-49ad-a1cf-c0025fb7246f","brand":"Chevrolet","vehicle_type":"car","type":"bev","brand_id":"cbca5847-9b23-47d9-80d3-24fa9a8ca21a","model":"Spark EV","release_year":2015,"variant":"19 kWh","usable_battery_size":19,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.3,"power_per_charging_point":{"11":3.3,"16":3.3,"22":3.3,"43":3.3,"2.0":2,"2.3":2.3,"3.7":3.3,"7.4":3.3}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.3}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":14}},{"id":"b8a76fa8-97f1-4f27-8f9f-80f26df230d1","brand":"Chevrolet","vehicle_type":"car","type":"bev","brand_id":"cbca5847-9b23-47d9-80d3-24fa9a8ca21a","model":"Bolt","release_year":2017,"variant":"60 kWh","usable_battery_size":58,"ac_charger":{"usable_phases":2,"ports":["type1","type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":55,"charging_curve":[{"percentage":0,"power":55},{"percentage":56,"power":38},{"percentage":68,"power":24},{"percentage":85,"power":16},{"percentage":100,"power":0}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":12.9}},{"id":"e39a4268-ddae-a5d5-9e0b-780dd0b3e2d9","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"Ami","release_year":2021,"variant":"ONE","usable_battery_size":5.5,"ac_charger":{"usable_phases":1,"ports":[],"max_power":2.3,"power_per_charging_point":{"11":2.3,"16":2.3,"22":2.3,"43":2.3,"2.0":2,"2.3":2.3,"3.7":2.3,"7.4":2.3}},"dc_charger":null,"energy_consumption":{"average_consumption":4.5}},{"id":"45b68c71-cd11-4bd7-a03f-fdaae259635d","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"C-Zero","release_year":null,"variant":"","usable_battery_size":14.5,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.1}},{"id":"e8773876-6036-4a6c-926e-5490aae58971","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"Berlingo Electric","release_year":null,"variant":"","usable_battery_size":22.5,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.2,"power_per_charging_point":{"11":3.2,"16":3.2,"22":3.2,"43":3.2,"2.0":2,"2.3":2.3,"3.7":3.2,"7.4":3.2}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.7}},{"id":"69d3b6cb-70a7-47a5-8e04-3a14d3576b36","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"ë-C4","release_year":2020,"variant":"","usable_battery_size":46,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":40,"power":95},{"percentage":60,"power":77},{"percentage":75,"power":55},{"percentage":100,"power":13}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18}},{"id":"e2d5a248-d966-4b08-8fb0-9383fa84b713","brand":"Citroen","vehicle_type":"car","type":"phev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"C5","release_year":2020,"variant":"Hybrid","usable_battery_size":13.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":null,"energy_consumption":{"average_consumption":16}},{"id":"870f1edc-6c06-444f-9bc1-0074b6409cbb","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"ë-Spacetourer","release_year":2020,"variant":"50 kWh","usable_battery_size":46,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":40,"power":95},{"percentage":60,"power":77},{"percentage":75,"power":55},{"percentage":100,"power":13}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18}},{"id":"8bcc442d-1c0e-4efc-9bda-98cac700a98d","brand":"Citroen","vehicle_type":"car","type":"bev","brand_id":"3b3fc191-f4c3-45da-bc3b-21efbe1b264f","model":"ë-Spacetourer","release_year":2020,"variant":"75 kWh","usable_battery_size":75,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":40,"power":95},{"percentage":60,"power":77},{"percentage":75,"power":55},{"percentage":100,"power":13}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18}},{"id":"430ca2cd-bd4b-482a-8776-85a8c7d3435c","brand":"DS","vehicle_type":"car","type":"bev","brand_id":"37bfdacf-1aca-4eb7-8daa-8dc5b14c59e9","model":"3 Crossback E-Tense","release_year":2020,"variant":"11 kW-AC","usable_battery_size":46,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.4}},{"id":"3b5bb8d1-0f34-4c05-861c-45d19a8883b9","brand":"DS","vehicle_type":"car","type":"bev","brand_id":"37bfdacf-1aca-4eb7-8daa-8dc5b14c59e9","model":"3 Crossback E-Tense","release_year":2020,"variant":"7,2 kW-AC","usable_battery_size":46,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":7.4}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.4}},{"id":"ee64213e-fa1d-425e-b90e-6cff9c2a3469","brand":"DS","vehicle_type":"car","type":"phev","brand_id":"37bfdacf-1aca-4eb7-8daa-8dc5b14c59e9","model":"7 Crossback","release_year":2020,"variant":"E-Tense 4X4 PHEV","usable_battery_size":13.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":17.4}},{"id":"db0f0c27-ec80-7479-a5ff-ca8fef1adb1b","brand":"Dacia","vehicle_type":"car","type":"bev","brand_id":"3db0ef48-3566-5fab-00a9-3107c4019b68","model":"Spring Electric","release_year":2021,"variant":"","usable_battery_size":26.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":30,"charging_curve":[{"percentage":0,"power":28.5},{"percentage":75,"power":30},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15.8}},{"id":"52528a60-360d-0fd8-05ec-826572b4d327","brand":"Energica","vehicle_type":"motorbike","type":"bev","brand_id":"ef55e52a-51bd-740c-876d-92cbc6a6cac1","model":"Eva","release_year":2020,"variant":"Ribelle","usable_battery_size":18.9,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3,"power_per_charging_point":{"11":3,"16":3,"22":3,"43":3,"2.0":2,"2.3":2.3,"3.7":3,"7.4":3}},"dc_charger":{"ports":["ccs"],"max_power":23,"charging_curve":[{"percentage":0,"power":22},{"percentage":25,"power":23},{"percentage":35,"power":23},{"percentage":50,"power":18},{"percentage":60,"power":17},{"percentage":75,"power":15},{"percentage":85,"power":15},{"percentage":100,"power":3}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":11.59}},{"id":"791a1d30-5072-d27e-7f01-7b2f4bf5d4f3","brand":"Energica","vehicle_type":"motorbike","type":"bev","brand_id":"ef55e52a-51bd-740c-876d-92cbc6a6cac1","model":"Ego","release_year":2019,"variant":"","usable_battery_size":18.9,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3,"power_per_charging_point":{"11":3,"16":3,"22":3,"43":3,"2.0":2,"2.3":2.3,"3.7":3,"7.4":3}},"dc_charger":{"ports":["ccs"],"max_power":23,"charging_curve":[{"percentage":0,"power":22},{"percentage":25,"power":23},{"percentage":35,"power":23},{"percentage":50,"power":18},{"percentage":60,"power":17},{"percentage":75,"power":15},{"percentage":85,"power":15},{"percentage":100,"power":3}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":11.59}},{"id":"e69c9424-5b15-e141-ea6a-963c93a9039c","brand":"Energica","vehicle_type":"motorbike","type":"bev","brand_id":"ef55e52a-51bd-740c-876d-92cbc6a6cac1","model":"Eva","release_year":2019,"variant":"","usable_battery_size":18.9,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3,"power_per_charging_point":{"11":3,"16":3,"22":3,"43":3,"2.0":2,"2.3":2.3,"3.7":3,"7.4":3}},"dc_charger":null,"energy_consumption":{"average_consumption":11.59}},{"id":"2f2b159b-9b03-450f-9818-c139323d1735","brand":"Fiat","vehicle_type":"car","type":"bev","brand_id":"3291e5ba-862c-49fa-8437-71105743875e","model":"500e","release_year":2014,"variant":"","usable_battery_size":19.2,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":null,"energy_consumption":{"average_consumption":18}},{"id":"22f521ce-42ca-40d7-bfdb-5d33b1bd9cbe","brand":"Fiat","vehicle_type":"car","type":"bev","brand_id":"3291e5ba-862c-49fa-8437-71105743875e","model":"500e","release_year":2020,"variant":"","usable_battery_size":42,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":85,"charging_curve":[{"percentage":0,"power":80.8},{"percentage":75,"power":85},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.8}},{"id":"6cd5ba89-6523-4bca-9423-ea92227a8b8d","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Focus electric","release_year":2013,"variant":"","usable_battery_size":23,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":null,"energy_consumption":{"average_consumption":16.4}},{"id":"c0a26929-1157-4fb4-a999-4f172df9cad7","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Focus electric","release_year":2017,"variant":"","usable_battery_size":33.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.4}},{"id":"4ea0fb0a-8d77-4a03-a147-5e962f8ea766","brand":"Ford","vehicle_type":"car","type":"phev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Kuga","release_year":2020,"variant":"PHEV","usable_battery_size":14.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":19}},{"id":"4d84c2e6-2902-4086-aa87-f3852a42d15d","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Mustang Mach e","release_year":2020,"variant":"AWD 98,8 kWh","usable_battery_size":88,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":60,"power":118},{"percentage":80,"power":73},{"percentage":100,"power":27}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.1}},{"id":"f44095b1-b4b0-430b-a88f-257a164d9dfd","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Mustang Mach e","release_year":2020,"variant":"RWD 75,7 kWh","usable_battery_size":70,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":113,"charging_curve":[{"percentage":0,"power":113},{"percentage":30,"power":99},{"percentage":60,"power":77},{"percentage":85,"power":36},{"percentage":100,"power":13}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"b93051f8-a4c4-488f-9862-6c92a8ab7f11","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Mustang Mach e","release_year":2020,"variant":"AWD 75,7 kWh","usable_battery_size":70,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":113,"charging_curve":[{"percentage":0,"power":113},{"percentage":30,"power":99},{"percentage":60,"power":77},{"percentage":85,"power":36},{"percentage":100,"power":13}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.9}},{"id":"b1aa6457-c0af-458d-96dc-178ad1977e47","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Mustang Mach e","release_year":2020,"variant":"RWD 98,8 kWh","usable_battery_size":88,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":60,"power":118},{"percentage":80,"power":73},{"percentage":100,"power":27}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"2a41f004-7fe8-4dfe-8e6c-57691c9b6283","brand":"Ford","vehicle_type":"car","type":"bev","brand_id":"6cf9e9b6-28aa-44c7-b6c3-438d518ac12f","model":"Mustang Mach e","release_year":2020,"variant":"GT","usable_battery_size":88,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":60,"power":118},{"percentage":80,"power":73},{"percentage":100,"power":27}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"5bfa9a87-7b35-4e3a-bd3f-dc2ac55e184b","brand":"Honda","vehicle_type":"car","type":"bev","brand_id":"9ca5e092-76e2-4868-afc1-c06abeedf81b","model":"e","release_year":2020,"variant":"","usable_battery_size":32,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":60,"charging_curve":[{"percentage":0,"power":57},{"percentage":75,"power":60},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16}},{"id":"3038b11b-2dfc-4f9f-b22c-4bfdc08d0c4b","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Ioniq","release_year":2019,"variant":"","usable_battery_size":38.3,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":46,"charging_curve":[{"percentage":0,"power":40},{"percentage":51,"power":46},{"percentage":53,"power":36},{"percentage":67,"power":37},{"percentage":69,"power":23},{"percentage":74,"power":23},{"percentage":76,"power":15},{"percentage":90,"power":15},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.3}},{"id":"b58bc94d-d929-ad71-d95b-08b877bf76ba","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Ioniq 5","release_year":2021,"variant":"","usable_battery_size":72.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":232,"charging_curve":[{"percentage":0,"power":200},{"percentage":10,"power":210},{"percentage":22,"power":232},{"percentage":23,"power":185},{"percentage":37,"power":185},{"percentage":38,"power":175},{"percentage":47,"power":175},{"percentage":48,"power":155},{"percentage":55,"power":155},{"percentage":56,"power":130},{"percentage":70,"power":130},{"percentage":80,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.4}},{"id":"c1fd1277-5d77-416b-bb25-84bd21f57963","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Kona","release_year":2020,"variant":"64 kWh 11 kW-AC","usable_battery_size":64,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":70},{"percentage":40,"power":77},{"percentage":42,"power":70},{"percentage":53,"power":71},{"percentage":55,"power":57},{"percentage":71,"power":58},{"percentage":72,"power":38},{"percentage":76,"power":38},{"percentage":78,"power":25},{"percentage":88,"power":25},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.8}},{"id":"6cc437e9-b842-4c1b-9c08-9ca2d46d22a9","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Kona","release_year":2018,"variant":"39 kWh 7,2 kW-AC","usable_battery_size":39.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15.4}},{"id":"8df35b23-dcc6-4590-83c7-5578da4c4809","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Kona","release_year":2018,"variant":"64 kWh 7,2 kW-AC","usable_battery_size":64,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":70},{"percentage":40,"power":77},{"percentage":42,"power":70},{"percentage":53,"power":71},{"percentage":55,"power":57},{"percentage":71,"power":58},{"percentage":72,"power":38},{"percentage":76,"power":38},{"percentage":78,"power":25},{"percentage":88,"power":25},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.8}},{"id":"e81564b0-46e3-41f6-b6a6-70370a37f685","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Kona","release_year":2020,"variant":"39 kWh 11 kW-AC","usable_battery_size":39.2,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15.4}},{"id":"c576bee8-8066-4174-bc69-5fe9f2e666ee","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Ioniq","release_year":2016,"variant":"","usable_battery_size":28,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":69,"charging_curve":[{"percentage":0,"power":60},{"percentage":76,"power":69},{"percentage":84,"power":23},{"percentage":92,"power":23},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":14.4}},{"id":"3667752d-17a5-4166-abaf-dcf227948bfd","brand":"Hyundai","vehicle_type":"car","type":"bev","brand_id":"9771afb8-9e25-4ae6-a5b3-b2a5b9f363f0","model":"Ioniq","release_year":2016,"variant":"PHEV","usable_battery_size":8.9,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":15.4}},{"id":"8da12395-cf7a-4ccf-886f-e25ade426457","brand":"Jaguar","vehicle_type":"car","type":"bev","brand_id":"61fc79a2-04ca-418e-9333-caf5f67ba02f","model":"i-Pace","release_year":null,"variant":"","usable_battery_size":84,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":105,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":105},{"percentage":80,"power":55},{"percentage":90,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.2}},{"id":"755da8dd-f3d7-48de-a92a-bee65c5e6201","brand":"Jaguar","vehicle_type":"car","type":"bev","brand_id":"61fc79a2-04ca-418e-9333-caf5f67ba02f","model":"i-Pace","release_year":2020,"variant":"EV320","usable_battery_size":84,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":105,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":105},{"percentage":80,"power":55},{"percentage":90,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.2}},{"id":"f77ac610-ac67-48c7-af8a-f78e0bf31c70","brand":"Jaguar","vehicle_type":"car","type":"bev","brand_id":"61fc79a2-04ca-418e-9333-caf5f67ba02f","model":"i-Pace","release_year":2020,"variant":"EV400","usable_battery_size":84,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":105,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":105},{"percentage":80,"power":55},{"percentage":90,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.2}},{"id":"fe545103-2f35-fe06-302a-8d1f5e673d0f","brand":"Jeep","vehicle_type":"car","type":"phev","brand_id":"3f1649fc-a64c-fd11-53a6-56031d7757aa","model":"Renegade 4xe","release_year":2020,"variant":"11,4 kWh","usable_battery_size":11.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":23.9}},{"id":"9b0481fc-60cf-5975-6eb2-ce03cd7bc5f8","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"EV6","release_year":2021,"variant":"Standard Range 2WD","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":175,"charging_curve":[{"percentage":0,"power":166.3},{"percentage":75,"power":175},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.3}},{"id":"776644a5-1ec8-cb13-92d1-ac9d10c36826","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"EV6","release_year":2021,"variant":"Long Range 2WD","usable_battery_size":77.4,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":250,"charging_curve":[{"percentage":0,"power":237.5},{"percentage":75,"power":250},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.5}},{"id":"5e1746c9-56a2-4fb9-8a76-b75c95a037ee","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"Soul","release_year":null,"variant":"30 kWh","usable_battery_size":30,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.6}},{"id":"68cbedff-8994-4b77-bfb5-6aa22962e3a2","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Niro","release_year":2020,"variant":"64 kWh","usable_battery_size":64,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":70},{"percentage":40,"power":77},{"percentage":42,"power":70},{"percentage":53,"power":71},{"percentage":55,"power":57},{"percentage":71,"power":58},{"percentage":72,"power":38},{"percentage":76,"power":38},{"percentage":78,"power":25},{"percentage":88,"power":25},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.3}},{"id":"0f7eae0b-43be-48f8-b4a0-1a8266fd07a9","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Niro","release_year":2018,"variant":"64 kWh","usable_battery_size":64,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":70},{"percentage":40,"power":77},{"percentage":42,"power":70},{"percentage":53,"power":71},{"percentage":55,"power":57},{"percentage":71,"power":58},{"percentage":72,"power":38},{"percentage":76,"power":38},{"percentage":78,"power":25},{"percentage":88,"power":25},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.3}},{"id":"66cb7bea-24b7-458f-ae3e-11d4a852568b","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Niro","release_year":2018,"variant":"39 kWh","usable_battery_size":39,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.3}},{"id":"63cd9718-5737-4898-a4f4-e594b28c74c0","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Niro","release_year":2020,"variant":"39 kWh 11 kW-AC","usable_battery_size":39,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.3}},{"id":"add28704-7b59-474d-bfa6-2338e54ccaef","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"Soul","release_year":null,"variant":"27 kWh","usable_battery_size":27,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.6}},{"id":"87e73c44-93ba-4687-877c-32a3aa940a09","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Soul","release_year":2020,"variant":"64 kWh 11 kW-AC","usable_battery_size":64,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":73.1},{"percentage":75,"power":77},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.5}},{"id":"58661a4c-e1f9-4dc2-8d09-3bb42be62554","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Soul","release_year":2019,"variant":"39 kWh","usable_battery_size":39,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17}},{"id":"3c933da2-1fa1-4094-825a-a181610dbfd0","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Soul","release_year":2019,"variant":"64 kWh","usable_battery_size":64,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":77,"charging_curve":[{"percentage":0,"power":70},{"percentage":40,"power":77},{"percentage":42,"power":70},{"percentage":53,"power":71},{"percentage":55,"power":57},{"percentage":71,"power":58},{"percentage":72,"power":38},{"percentage":76,"power":38},{"percentage":78,"power":25},{"percentage":88,"power":25},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.5}},{"id":"600a7816-ea65-4e6a-ac91-c5528b379028","brand":"Kia","vehicle_type":"car","type":"bev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"e-Soul","release_year":2019,"variant":"39 kWh 11 kW-AC","usable_battery_size":39,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17}},{"id":"b97f749b-5361-4116-8103-c208dc601a0b","brand":"Kia","vehicle_type":"car","type":"phev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"Ceed SW","release_year":2020,"variant":"PHEV","usable_battery_size":8.9,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.3,"power_per_charging_point":{"11":3.3,"16":3.3,"22":3.3,"43":3.3,"2.0":2,"2.3":2.3,"3.7":3.3,"7.4":3.3}},"dc_charger":null,"energy_consumption":{"average_consumption":11.3}},{"id":"84f2fcc1-cc73-4919-8d76-0f1ba8eaf685","brand":"Kia","vehicle_type":"car","type":"phev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"XCeed","release_year":2020,"variant":"PHEV","usable_battery_size":8.9,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.3,"power_per_charging_point":{"11":3.3,"16":3.3,"22":3.3,"43":3.3,"2.0":2,"2.3":2.3,"3.7":3.3,"7.4":3.3}},"dc_charger":null,"energy_consumption":{"average_consumption":11.3}},{"id":"a883bb35-270d-4f31-9169-ccf06ae3c0c5","brand":"Kia","vehicle_type":"car","type":"phev","brand_id":"3337d5f0-39de-4ded-831b-843dfec1ebbd","model":"Niro","release_year":2020,"variant":"PHEV","usable_battery_size":8.9,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.3,"power_per_charging_point":{"11":3.3,"16":3.3,"22":3.3,"43":3.3,"2.0":2,"2.3":2.3,"3.7":3.3,"7.4":3.3}},"dc_charger":null,"energy_consumption":{"average_consumption":9.8}},{"id":"e7717ac1-90fa-4bea-9272-52afc10facc4","brand":"MAN","vehicle_type":"car","type":"bev","brand_id":"8f65f3e7-430e-4c85-93fd-a70aa181fd9c","model":"e TGE","release_year":2020,"variant":"","usable_battery_size":35.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":40,"charging_curve":[{"percentage":0,"power":38},{"percentage":75,"power":40},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":30.9}},{"id":"c1fda7bf-9307-03c9-86c1-0350de0994cb","brand":"MG","vehicle_type":"car","type":"bev","brand_id":"5663b87a-d940-4bab-9846-d74c8c0ae260","model":"MG5 EV","release_year":2020,"variant":"","usable_battery_size":48.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":80,"charging_curve":[{"percentage":0,"power":70},{"percentage":10,"power":80},{"percentage":20,"power":70},{"percentage":80,"power":55},{"percentage":83,"power":18},{"percentage":90,"power":18},{"percentage":100,"power":6.6}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"8b0195b6-5318-46d9-a6fd-1b5f75e8b495","brand":"MG","vehicle_type":"car","type":"bev","brand_id":"5663b87a-d940-4bab-9846-d74c8c0ae260","model":"ZS EV","release_year":2020,"variant":"","usable_battery_size":44.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":80,"charging_curve":[{"percentage":0,"power":70},{"percentage":10,"power":80},{"percentage":20,"power":70},{"percentage":80,"power":55},{"percentage":83,"power":18},{"percentage":90,"power":18},{"percentage":100,"power":6.6}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.8}},{"id":"2ae110f8-8906-4b03-b4bc-83e5577c1cc1","brand":"Maxus","vehicle_type":"car","type":"bev","brand_id":"171a1e6d-8cbc-41a9-a8bb-e05b7ee98889","model":"EV80","release_year":2018,"variant":"","usable_battery_size":56,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":6.6,"16":6.6,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":28,"charging_curve":[{"percentage":0,"power":26.6},{"percentage":75,"power":28},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":35}},{"id":"176af738-f385-4dc8-9243-9c701fbd7759","brand":"Mazda","vehicle_type":"car","type":"bev","brand_id":"9b829849-1219-48b8-964e-90ddc1a4fa85","model":"MX-30","release_year":2020,"variant":"","usable_battery_size":32,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["ccs"],"max_power":38,"charging_curve":[{"percentage":0,"power":30},{"percentage":55,"power":38},{"percentage":70,"power":30},{"percentage":90,"power":18},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.8}},{"id":"8a5cd1a2-f84a-22b9-b397-470fe5ca5bca","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"EQC","release_year":2020,"variant":"11 kW-AC","usable_battery_size":80,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":105},{"percentage":39,"power":125},{"percentage":70,"power":87},{"percentage":84,"power":68},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":21.6}},{"id":"5335d545-cfeb-4bca-bb11-cf0966f1b5ca","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"EQC","release_year":2019,"variant":"7,4 kW-AC","usable_battery_size":80,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":7.4,"16":7.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":105},{"percentage":39,"power":125},{"percentage":70,"power":87},{"percentage":84,"power":68},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":21.6}},{"id":"0fad0871-8a99-6506-9c09-837f9ede132d","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"EQA","release_year":2021,"variant":"250","usable_battery_size":66.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":35,"power":98},{"percentage":65,"power":70},{"percentage":85,"power":36},{"percentage":100,"power":1}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.7}},{"id":"6bbd3cdd-2b11-43cd-85b9-4556937f9f82","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"EQV","release_year":2020,"variant":"300 Long\\r","usable_battery_size":90,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":110,"charging_curve":[{"percentage":0,"power":104.5},{"percentage":75,"power":110},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":27.3}},{"id":"71cc8552-391f-49b0-b106-2202fa222161","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"B-Klasse","release_year":null,"variant":"","usable_battery_size":28,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.6}},{"id":"1e8c0cc5-20db-491f-9242-12cf3bc7b962","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"A 250 e","release_year":2020,"variant":"7,4 kW-AC + DC","usable_battery_size":10.7,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":7.4,"16":7.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":24,"charging_curve":[{"percentage":0,"power":22.8},{"percentage":75,"power":24},{"percentage":100,"power":7.4}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15}},{"id":"46240342-6f7e-4767-b66d-3234ba874a30","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"A 250 e","release_year":2020,"variant":"7,4 kW-AC","usable_battery_size":10.7,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":7.4,"16":7.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":15}},{"id":"f45de10a-764f-4a7e-9591-b974d0b87038","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"A 250 e","release_year":2020,"variant":"3,7 kW-AC","usable_battery_size":10.7,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":15}},{"id":"b0da6660-c20e-40c3-9db7-0b19c478c6cb","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"GLC 300 de 4MATIC","release_year":2020,"variant":"PHEV","usable_battery_size":13.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":18.2}},{"id":"7fe5b0f6-aa07-4900-a109-a2b04117b762","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"C 300","release_year":2019,"variant":"de","usable_battery_size":13.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":20}},{"id":"22cd1b30-c5ec-4042-85c0-159a154c590a","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"E 300","release_year":2019,"variant":"e","usable_battery_size":13.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":20}},{"id":"8b51a06f-676a-46aa-9074-4d3364ea1cca","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"GLE","release_year":2020,"variant":"350 de/e","usable_battery_size":31.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":60,"charging_curve":[{"percentage":0,"power":57},{"percentage":75,"power":60},{"percentage":100,"power":7.4}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":31.2}},{"id":"4a5d82a6-9778-41a6-8e85-1fa108897f30","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"C 300","release_year":2019,"variant":"e","usable_battery_size":13.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":20}},{"id":"ed02b1b2-f89d-432d-9e62-4feb8fb9cf97","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"CLA 250","release_year":2020,"variant":"e","usable_battery_size":15.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":24,"charging_curve":[{"percentage":0,"power":22.8},{"percentage":75,"power":24},{"percentage":100,"power":7.4}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":20}},{"id":"0a853f34-7c1f-492a-ae34-937767f53cbd","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"E 350","release_year":2016,"variant":"e","usable_battery_size":9,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":20}},{"id":"cb56eb6c-33a6-40d7-9e4b-53625fd8385c","brand":"Mercedes Benz","vehicle_type":"car","type":"phev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"E 300","release_year":2019,"variant":"de","usable_battery_size":13.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":20}},{"id":"5ca66d3a-8a33-48f5-a0b9-d8bbf25a6e24","brand":"Mercedes Benz","vehicle_type":"car","type":"bev","brand_id":"b2282fbe-f5d9-48d9-943f-a9b66ec51423","model":"eVito","release_year":2019,"variant":"Tourer","usable_battery_size":41,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":null,"energy_consumption":{"average_consumption":26.2}},{"id":"8cfce5f4-23b6-470a-87fa-a04095fe0334","brand":"Mini","vehicle_type":"car","type":"phev","brand_id":"6d9d9248-de4a-4b13-976b-4e9f6688b0b1","model":"Countryman ALL4","release_year":2019,"variant":"","usable_battery_size":7.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":13.2}},{"id":"d8c11860-a582-4784-9e58-d29e94a67fc2","brand":"Mini","vehicle_type":"car","type":"bev","brand_id":"6d9d9248-de4a-4b13-976b-4e9f6688b0b1","model":"Cooper SE","release_year":2020,"variant":"","usable_battery_size":28.9,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.1}},{"id":"2c7abcf4-0ba0-4feb-9e9b-b47661072feb","brand":"Mitsubishi","vehicle_type":"car","type":"bev","brand_id":"3cf8cf51-60ac-4cac-9f25-131c21eda12e","model":"i-Miev","release_year":null,"variant":"","usable_battery_size":14.5,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":12.9}},{"id":"1847e3aa-750c-4b12-a80a-56e792b3aadb","brand":"Mitsubishi","vehicle_type":"car","type":"phev","brand_id":"3cf8cf51-60ac-4cac-9f25-131c21eda12e","model":"Outlander PHEV","release_year":2018,"variant":"","usable_battery_size":11,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":{"ports":["chademo"],"max_power":22,"charging_curve":[{"percentage":0,"power":20.9},{"percentage":75,"power":22},{"percentage":100,"power":3.7}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":15.2}},{"id":"2644bfd3-a593-4276-bb1f-c8965e33797e","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"e-NV 200","release_year":null,"variant":"24 kWh 6,6 kW-AC","usable_battery_size":24,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":46,"charging_curve":[{"percentage":0,"power":40},{"percentage":10,"power":45},{"percentage":23,"power":46},{"percentage":80,"power":25},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"86290f48-f554-4db5-bd35-4a8b7828689a","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"e-NV 200","release_year":null,"variant":"24 kWh","usable_battery_size":24,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":46,"charging_curve":[{"percentage":0,"power":40},{"percentage":10,"power":45},{"percentage":23,"power":46},{"percentage":80,"power":25},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"daa3573d-60ea-4c7a-8048-79c575e3db4c","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"e-NV 200","release_year":null,"variant":"40 kWh","usable_battery_size":38,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":45,"charging_curve":[{"percentage":0,"power":40},{"percentage":62,"power":45},{"percentage":75,"power":36},{"percentage":100,"power":15}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"78b14a0f-5c62-4885-95ef-2e3f81197260","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2019,"variant":"e+ 62 kWh","usable_battery_size":62,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":6.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.2}},{"id":"77028f96-eb9b-4c65-b452-c92011b1fc1c","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2018,"variant":"40 kWh","usable_battery_size":38,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":45,"charging_curve":[{"percentage":0,"power":41},{"percentage":62,"power":45},{"percentage":65,"power":36},{"percentage":100,"power":15}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.4}},{"id":"dc7d163b-29bc-45cf-8156-60eb3e3b1294","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2011,"variant":"24 kWh","usable_battery_size":24,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":46,"charging_curve":[{"percentage":0,"power":40},{"percentage":22,"power":46},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.9}},{"id":"3b649ae3-935b-425b-b5d6-75c549b96d40","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2011,"variant":"24 kWh 6,6 kW-AC","usable_battery_size":24,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":46,"charging_curve":[{"percentage":0,"power":40},{"percentage":22,"power":46},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.9}},{"id":"83ec0576-bfb8-400a-9af9-483b2684673c","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2015,"variant":"30 kWh","usable_battery_size":30,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":47,"charging_curve":[{"percentage":0,"power":41},{"percentage":80,"power":47},{"percentage":90,"power":30},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"74f2c3a5-f78f-459a-823a-dfc0a21e5aeb","brand":"Nissan","vehicle_type":"car","type":"bev","brand_id":"dab5a47a-e8ce-4d34-9139-0701499205b1","model":"Leaf","release_year":2015,"variant":"30 kWh 6,6 kW-AC","usable_battery_size":30,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":6.6,"power_per_charging_point":{"11":3.7,"16":5.4,"22":6.6,"43":6.6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6.6}},"dc_charger":{"ports":["chademo"],"max_power":47,"charging_curve":[{"percentage":0,"power":41},{"percentage":80,"power":47},{"percentage":90,"power":30},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"1cec7821-632f-4f17-8a58-644b6ab23f44","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Corsa-e","release_year":2020,"variant":"7,2 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":16,"power":99},{"percentage":20,"power":95},{"percentage":21,"power":75},{"percentage":47,"power":75},{"percentage":48,"power":53},{"percentage":67,"power":53},{"percentage":68,"power":41},{"percentage":72,"power":41},{"percentage":73,"power":2},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.4}},{"id":"6f96c616-e87a-4958-bbe7-b4278be00170","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Corsa-e","release_year":2020,"variant":"11 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":99,"charging_curve":[{"percentage":0,"power":99},{"percentage":16,"power":99},{"percentage":20,"power":95},{"percentage":21,"power":75},{"percentage":47,"power":75},{"percentage":48,"power":53},{"percentage":67,"power":53},{"percentage":68,"power":41},{"percentage":72,"power":41},{"percentage":73,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.4}},{"id":"557ce8e0-56c0-258e-6012-60c591df3b77","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Mokka-e","release_year":2021,"variant":"","usable_battery_size":47.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":97,"charging_curve":[{"percentage":0,"power":97},{"percentage":16,"power":97},{"percentage":17,"power":78},{"percentage":46,"power":78},{"percentage":47,"power":52},{"percentage":68,"power":52},{"percentage":69,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.6}},{"id":"7bff132a-ecad-af92-99e6-9bea47805e21","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Vivaro-e","release_year":2020,"variant":"50 kWh","usable_battery_size":50,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":21.7}},{"id":"c9e46cfd-6fb0-99b1-1911-d25a9d762e37","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Vivaro-e","release_year":2020,"variant":"75 kWh","usable_battery_size":75,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":21.7}},{"id":"f33f0a4f-9b53-4e21-807b-f8b2ca4a24f6","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Ampera e","release_year":2017,"variant":"CCS","usable_battery_size":60,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":45,"charging_curve":[{"percentage":0,"power":45},{"percentage":50,"power":45},{"percentage":100,"power":15}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.3}},{"id":"7f4bf402-f8e2-47da-b456-30f1bdfce8ac","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Ampera e-Pionier","release_year":2012,"variant":"","usable_battery_size":10.6,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":2.2,"power_per_charging_point":{"11":2.2,"16":2.2,"22":2.2,"43":2.2,"2.0":2,"2.3":2.2,"3.7":2.2,"7.4":2.2}},"dc_charger":null,"energy_consumption":{"average_consumption":16.9}},{"id":"5655021c-128f-49cf-970e-91b133335eec","brand":"Opel","vehicle_type":"car","type":"bev","brand_id":"3500fb3e-bd2c-478e-ae5e-ac9ee490594b","model":"Zafira e-life","release_year":2021,"variant":"Zafira-e Life 50 kWh","usable_battery_size":46,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.4}},{"id":"926efa33-4c55-43df-80f3-4b8d2d65a00a","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"e-208","release_year":2020,"variant":"7,2 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":97,"charging_curve":[{"percentage":0,"power":97},{"percentage":16,"power":97},{"percentage":17,"power":78},{"percentage":46,"power":78},{"percentage":47,"power":52},{"percentage":68,"power":52},{"percentage":69,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"04980813-ec12-1047-40ea-4c6c44b60171","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"E-Traveller","release_year":2020,"variant":"50 kWh 7.4 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":7.4,"16":7.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":98,"charging_curve":[{"percentage":0,"power":98},{"percentage":20,"power":87},{"percentage":22,"power":75},{"percentage":57,"power":75},{"percentage":59,"power":50},{"percentage":65,"power":50},{"percentage":67,"power":45},{"percentage":73,"power":45},{"percentage":74,"power":25},{"percentage":84,"power":25},{"percentage":85,"power":12},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":24.3}},{"id":"ca526f1f-69d7-9c32-ac5b-13333fe57e78","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"E-Traveller","release_year":2020,"variant":"50 kWh 11 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":98,"charging_curve":[{"percentage":0,"power":98},{"percentage":20,"power":87},{"percentage":22,"power":75},{"percentage":57,"power":75},{"percentage":59,"power":50},{"percentage":65,"power":50},{"percentage":67,"power":45},{"percentage":73,"power":45},{"percentage":74,"power":25},{"percentage":84,"power":25},{"percentage":85,"power":12},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":24.3}},{"id":"de7bac96-33ed-44f2-964e-21a4878e9f00","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"e-208","release_year":2020,"variant":"11 kW-AC","usable_battery_size":45,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":97,"charging_curve":[{"percentage":0,"power":97},{"percentage":16,"power":97},{"percentage":17,"power":78},{"percentage":46,"power":78},{"percentage":47,"power":52},{"percentage":68,"power":52},{"percentage":69,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"28b61ff5-734a-412e-9241-dec4c27d1a38","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"I-on","release_year":null,"variant":"","usable_battery_size":14.5,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.6}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":12.9}},{"id":"72695d36-29c4-4726-8ca8-5333fb3f9865","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"e-2008","release_year":2020,"variant":"7,2 kW-AC","usable_battery_size":47.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":97,"charging_curve":[{"percentage":0,"power":97},{"percentage":16,"power":97},{"percentage":17,"power":78},{"percentage":46,"power":78},{"percentage":47,"power":52},{"percentage":68,"power":52},{"percentage":69,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18}},{"id":"9d101a26-eaaa-4058-a251-5221b45ffd91","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"e-2008","release_year":2020,"variant":"11 kW-AC","usable_battery_size":47.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":97,"charging_curve":[{"percentage":0,"power":97},{"percentage":16,"power":97},{"percentage":17,"power":78},{"percentage":46,"power":78},{"percentage":47,"power":52},{"percentage":68,"power":52},{"percentage":69,"power":27},{"percentage":83,"power":27},{"percentage":84,"power":11},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18}},{"id":"e60a8ec6-a6dd-46ae-846a-35cb57f1d8e3","brand":"Peugeot","vehicle_type":"car","type":"bev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"Partner","release_year":null,"variant":"","usable_battery_size":22.5,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.2,"power_per_charging_point":{"11":3.2,"16":3.2,"22":3.2,"43":3.2,"2.0":2,"2.3":2.3,"3.7":3.2,"7.4":3.2}},"dc_charger":{"ports":["chademo"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":3.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":20.5}},{"id":"09022e0a-c322-46e7-9171-b48fdd953cca","brand":"Peugeot","vehicle_type":"car","type":"phev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"3008","release_year":2020,"variant":"HYbrid4 3,7 kW-AC","usable_battery_size":11.2,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":15.2}},{"id":"7ba60564-7eda-457b-b7d5-46dd1b15cc0e","brand":"Peugeot","vehicle_type":"car","type":"phev","brand_id":"f458fe7d-f545-45f3-8c23-2ab8140b8b5d","model":"3008","release_year":2020,"variant":"HYbrid4 7,4 kW-AC","usable_battery_size":11.2,"ac_charger":{"usable_phases":1,"ports":["type1"],"max_power":7.4,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.4,"43":7.4,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":15.2}},{"id":"c9025ab4-1c85-40d8-86ab-ee406de3b716","brand":"Polestar","vehicle_type":"car","type":"bev","brand_id":"391f000f-d9d1-4c13-b744-95f0b9c8a2e1","model":"2","release_year":2020,"variant":"","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":150,"charging_curve":[{"percentage":0,"power":150},{"percentage":18,"power":150},{"percentage":20,"power":130},{"percentage":40,"power":130},{"percentage":42,"power":100},{"percentage":55,"power":90},{"percentage":57,"power":70},{"percentage":79,"power":70},{"percentage":80,"power":25},{"percentage":100,"power":11}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.1}},{"id":"4c04db3b-c493-4b90-9859-21b7304a4ffc","brand":"Porsche","vehicle_type":"car","type":"bev","brand_id":"68e11a25-d316-4d22-9444-45c7306c8ab7","model":"Taycan","release_year":2020,"variant":"Turbo S","usable_battery_size":83.7,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":270,"charging_curve":[{"percentage":0,"power":256.5},{"percentage":75,"power":270},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":22.3}},{"id":"34b5ef32-efea-48fc-8386-3800d0b737f0","brand":"Porsche","vehicle_type":"car","type":"bev","brand_id":"68e11a25-d316-4d22-9444-45c7306c8ab7","model":"Taycan","release_year":2020,"variant":"4S","usable_battery_size":71,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":225,"charging_curve":[{"percentage":0,"power":213.8},{"percentage":75,"power":225},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":19.5}},{"id":"6990914a-6a0d-49d4-87f5-ee86ee33344c","brand":"Porsche","vehicle_type":"car","type":"bev","brand_id":"68e11a25-d316-4d22-9444-45c7306c8ab7","model":"Taycan","release_year":2020,"variant":"4S Plus","usable_battery_size":83.7,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":270,"charging_curve":[{"percentage":0,"power":256.5},{"percentage":75,"power":270},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":19.7}},{"id":"a12f033f-f2c2-44bd-b62c-7019898a72d0","brand":"Porsche","vehicle_type":"car","type":"bev","brand_id":"68e11a25-d316-4d22-9444-45c7306c8ab7","model":"Taycan","release_year":2020,"variant":"Turbo ","usable_battery_size":83.7,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":270,"charging_curve":[{"percentage":0,"power":256.5},{"percentage":75,"power":270},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":21.5}},{"id":"737441e8-6b5f-4185-9b0b-e51585ab6ea8","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2017,"variant":"R 90","usable_battery_size":41,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.1}},{"id":"c53b5947-23a3-420c-9798-f3846732e41a","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2019,"variant":"R110 ZE40","usable_battery_size":41,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":46,"charging_curve":[{"percentage":0,"power":41},{"percentage":52,"power":46},{"percentage":80,"power":27},{"percentage":100,"power":22}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"9666138c-1d24-4fa8-9083-0ffba09ab1ef","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2013,"variant":"Q 210","usable_battery_size":22,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":43,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22.2,"43":43,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":15.5}},{"id":"b3fd3e84-4dd4-4ac0-914f-3c3c582fc600","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2015,"variant":"R 240","usable_battery_size":22,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":15.5}},{"id":"5079c683-69ba-44b3-b8c8-d31fa00c97a1","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2019,"variant":"R135 ZE50","usable_battery_size":52,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":46,"charging_curve":[{"percentage":0,"power":41},{"percentage":52,"power":46},{"percentage":80,"power":27},{"percentage":100,"power":22}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.4}},{"id":"e604a056-9338-4044-93dd-5a595d4a3ef3","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2017,"variant":"Q 90","usable_battery_size":41,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":30,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22.2,"43":30,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.4}},{"id":"de3a8751-00c9-46d1-9e7a-ad830835c6a7","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Zoe","release_year":2019,"variant":"R110 ZE50","usable_battery_size":52,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":46,"charging_curve":[{"percentage":0,"power":41},{"percentage":52,"power":46},{"percentage":80,"power":27},{"percentage":100,"power":22}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.5}},{"id":"1c13fba9-2c09-4be1-b5c6-aecd2b253afb","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Kangoo ZE","release_year":null,"variant":"","usable_battery_size":33,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":3.7,"16":5.4,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":null,"energy_consumption":{"average_consumption":19.4}},{"id":"8f6db2f5-1dd9-46f6-bb97-eba419dbaea4","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Twizy","release_year":null,"variant":"","usable_battery_size":6.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":8.4}},{"id":"6fa12374-6162-451e-8464-5e0e73091839","brand":"Renault","vehicle_type":"car","type":"phev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Captur E-Tech","release_year":2020,"variant":"PHEV","usable_battery_size":9.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3,"power_per_charging_point":{"11":3,"16":3,"22":3,"43":3,"2.0":2,"2.3":2.3,"3.7":3,"7.4":3}},"dc_charger":null,"energy_consumption":{"average_consumption":17.4}},{"id":"46e4f46b-09d3-4beb-8649-f7a7f670bb45","brand":"Renault","vehicle_type":"car","type":"bev","brand_id":"c0d8a60c-34b8-44fe-8af7-9eeb62eedb4b","model":"Twingo Z.E.","release_year":2020,"variant":"22 kWh","usable_battery_size":21.3,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.3}},{"id":"1d05cd18-d724-c60a-e8a4-c54b33b580e6","brand":"Seat","vehicle_type":"car","type":"phev","brand_id":"91c527ff-aa74-4dbb-9091-36fb5ddd44b6","model":"Leon eHybrid","release_year":2020,"variant":"13 kWh - 204 ch","usable_battery_size":13,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":14}},{"id":"2eea1ef2-0fd1-481d-adee-68044666614e","brand":"Seat","vehicle_type":"car","type":"bev","brand_id":"91c527ff-aa74-4dbb-9091-36fb5ddd44b6","model":"Mii Electric","release_year":2020,"variant":"CCS","usable_battery_size":32.3,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":34,"charging_curve":[{"percentage":0,"power":32},{"percentage":27,"power":34},{"percentage":80,"power":14},{"percentage":100,"power":7}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.6}},{"id":"aa69b5e8-fc4e-40f8-8060-2c96248f62ef","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Enyaq iV","release_year":2020,"variant":"82 kWh 125 kW-DC","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":35,"power":125},{"percentage":50,"power":100},{"percentage":70,"power":70},{"percentage":80,"power":70},{"percentage":90,"power":37},{"percentage":100,"power":25}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19}},{"id":"18bb40bd-321b-4326-a404-e46652538830","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Enyaq iV","release_year":2020,"variant":"82 kWh 50 kW-DC","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":50},{"percentage":80,"power":50},{"percentage":90,"power":25},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19}},{"id":"4dc6b014-8612-4fa7-bb34-9ea4d7fa5220","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Enyaq iV","release_year":2020,"variant":"62 kWh 50 kW-DC","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":50},{"percentage":80,"power":50},{"percentage":90,"power":25},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.7}},{"id":"55ac0aaf-6bae-4a8e-ba50-4a9a7ab5b4af","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Enyaq iV","release_year":2020,"variant":"62 kWh 100 kW-DC","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":90},{"percentage":5,"power":100},{"percentage":30,"power":100},{"percentage":50,"power":75},{"percentage":70,"power":50},{"percentage":80,"power":50},{"percentage":90,"power":25},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.7}},{"id":"52a90ece-7261-20a4-55fc-34c11b1cdc92","brand":"Skoda","vehicle_type":"car","type":"phev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Octavia","release_year":2020,"variant":"iV PHEV","usable_battery_size":13,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":148}},{"id":"ffcd3116-4e17-49ff-a926-941c062643ea","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"CITIGOe iV","release_year":2020,"variant":"CCS","usable_battery_size":32.3,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":34,"charging_curve":[{"percentage":0,"power":32},{"percentage":27,"power":34},{"percentage":80,"power":14},{"percentage":100,"power":7}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.6}},{"id":"41c9d96c-6a19-4db0-ba3a-931ab99c6f15","brand":"Skoda","vehicle_type":"car","type":"phev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Superb iV","release_year":2020,"variant":"PHEV","usable_battery_size":13,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":14}},{"id":"ff261470-8556-4051-afec-c049abd5fe6a","brand":"Skoda","vehicle_type":"car","type":"bev","brand_id":"43763587-6999-406b-8843-28977e1b82c3","model":"Enyaq iV","release_year":2020,"variant":"55 kWh","usable_battery_size":52,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.7}},{"id":"0620ba23-8f0e-1a09-f96d-4fa691c84a54","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Roadster","release_year":2022,"variant":"","usable_battery_size":200,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["tesla_ccs","ccs"],"max_power":250,"charging_curve":[{"percentage":0,"power":237.5},{"percentage":75,"power":250},{"percentage":100,"power":22}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":20.6}},{"id":"80e7ef22-27f8-4e93-8c86-7a6a0a227e5d","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"70","usable_battery_size":67,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.5}},{"id":"ed3fe177-d852-49bd-84ca-8ecd8d7ec3b1","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"70, 22 kW-AC","usable_battery_size":67,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":100,"charging_curve":[{"percentage":0,"power":95},{"percentage":75,"power":100},{"percentage":100,"power":22}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.5}},{"id":"7de25a64-e9fa-484f-bf99-d02b02cfb17d","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model 3","release_year":null,"variant":"LR","usable_battery_size":74,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","tesla_ccs"],"max_power":195,"charging_curve":[{"percentage":0,"power":180},{"percentage":40,"power":195},{"percentage":60,"power":110},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.1}},{"id":"93c82e06-1aa3-4c19-8f81-b9fac0c598c3","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model 3","release_year":null,"variant":"SR+","usable_battery_size":50,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","tesla_ccs"],"max_power":149,"charging_curve":[{"percentage":0,"power":130},{"percentage":52,"power":149},{"percentage":60,"power":110},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.3}},{"id":"7dbad968-7058-4440-9c8f-8f483cdd973a","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model 3","release_year":null,"variant":"Performance","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","tesla_ccs"],"max_power":195,"charging_curve":[{"percentage":0,"power":180},{"percentage":40,"power":195},{"percentage":60,"power":110},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.7}},{"id":"0a663bbf-3b87-4e7a-bd7a-3e9c39961a2b","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"85","usable_battery_size":76,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.1}},{"id":"b5aa307e-a6b9-46e7-939e-2dd525870c13","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"100","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.4}},{"id":"32922583-e434-4ed2-afc1-4d8fde67aeda","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"90","usable_battery_size":81,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.2}},{"id":"7f709186-39c3-420f-9caf-1fdb424f7953","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"75","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":16.5}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.5}},{"id":"40e94478-d8f9-4a53-8e62-b1c571d7db29","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2012,"variant":"85D","usable_battery_size":77.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.1}},{"id":"01de7c99-366b-4084-909d-5723aad78668","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2015,"variant":"P90D","usable_battery_size":82,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.2}},{"id":"0551e45d-a5f5-4b78-b119-092b1b63a6bb","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2016,"variant":"BEV","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20.8}},{"id":"5f6b0607-8844-4484-8030-f1479d0b4fe9","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2016,"variant":"P100D","usable_battery_size":98,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"4e1a275f-c333-40b8-bf8b-8f6ff271f720","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"90D","usable_battery_size":83.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":16.5}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.2}},{"id":"6f30c707-a785-42e7-80dc-fff32e16bfcc","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"P85D, 22 kW-AC","usable_battery_size":80.8,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":22}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":19.1}},{"id":"a9d800d2-be3d-48d5-a732-7768d9ce4bde","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2017,"variant":"100D","usable_battery_size":98,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.9}},{"id":"b017f476-2111-4322-a843-97ba5be641e2","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"75D","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":16.5}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":19.1}},{"id":"1e752c58-220d-4d3a-bc9f-264cf095138a","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2019,"variant":"Long Range (Raven)","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19}},{"id":"f70eec15-6a6e-4f8c-8640-bb99ec06fe43","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"60","usable_battery_size":62,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":16.5}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18}},{"id":"72720dc0-75b1-4e93-9c6c-0c07c7930412","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"P85D","usable_battery_size":80.8,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":19.1}},{"id":"10317508-4fed-4aa2-a4da-d95fb20470eb","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2019,"variant":"Standard Range","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":18.4}},{"id":"4e172d17-11b4-4360-93ee-4e4b6ddb6fb6","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":2019,"variant":"Performance","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":197,"charging_curve":[{"percentage":0,"power":197},{"percentage":30,"power":149},{"percentage":50,"power":133},{"percentage":80,"power":73},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.3}},{"id":"d43501d6-32b3-4601-bd24-605682e873fd","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"60D","usable_battery_size":62,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":16.5}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":17.7}},{"id":"d302a787-ff60-489a-b69b-2d1713009e88","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"70D","usable_battery_size":66.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":11}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.8}},{"id":"8a5ea62e-5c8c-483e-93f3-eebd659c0968","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model S","release_year":null,"variant":"70D, 22 kW-AC","usable_battery_size":66.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":120,"charging_curve":[{"percentage":0,"power":114},{"percentage":75,"power":120},{"percentage":100,"power":22}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":18.8}},{"id":"d03d6e42-d6f8-4e3f-b527-a3c1d1e40f9d","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2016,"variant":"90D","usable_battery_size":90,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"908e578f-f890-4716-93e8-7c0f75e46bb5","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2016,"variant":"P90D","usable_battery_size":90,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":21}},{"id":"0aa5220a-6da7-4dc0-a0a1-714bea4fded3","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2017,"variant":"P100D","usable_battery_size":100,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":22}},{"id":"355eadbb-0c97-4a66-993d-8fdc61a77ef5","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2019,"variant":"Performance","usable_battery_size":100,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":22}},{"id":"7490520f-fe11-4148-a9b6-3882f06ee082","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2017,"variant":"100D","usable_battery_size":100,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"eb8d28ec-8df7-40a8-8dd7-badf738f0832","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2019,"variant":"Maximum Range","usable_battery_size":100,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"1b3105fa-527a-491f-ac26-5bfa94bfa45d","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2019,"variant":"75D","usable_battery_size":75,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"92ffd46c-fe26-4805-81ba-fbadce4d524f","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2016,"variant":"60D","usable_battery_size":60,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16}},{"id":"2768baf4-08a8-4760-a2a6-8e39a11664a8","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2020,"variant":"long range","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":[],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["tesla_suc","tesla_ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":70,"power":98},{"percentage":90,"power":44},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":22.6}},{"id":"3d010bc6-84ad-480c-9dbb-5a8c7c0210b9","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2020,"variant":"Performance","usable_battery_size":95,"ac_charger":{"usable_phases":3,"ports":[],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["tesla_suc","tesla_ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":70,"power":98},{"percentage":90,"power":44},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":23.6}},{"id":"b7c4ddb8-4806-4328-a4e6-4abb4746016d","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2019,"variant":"Standard Range","usable_battery_size":75,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","chademo","tesla_suc"],"max_power":140,"charging_curve":[{"percentage":0,"power":125},{"percentage":43,"power":140},{"percentage":80,"power":37},{"percentage":100,"power":12}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":20}},{"id":"6e66aeb0-7680-416c-912d-0cbbf38fc920","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model X","release_year":2020,"variant":"Standard Range","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":[],"max_power":16.5,"power_per_charging_point":{"11":11.1,"16":16.2,"22":16.5,"43":16.5,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["tesla_suc","tesla_ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":70,"power":98},{"percentage":90,"power":44},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":21.6}},{"id":"aade3809-159e-415d-a9ce-e5633a173fb8","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model Y","release_year":2020,"variant":"Long Range","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","tesla_suc","tesla_ccs"],"max_power":246,"charging_curve":[{"percentage":0,"power":246},{"percentage":35,"power":238},{"percentage":75,"power":99},{"percentage":100,"power":18}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":14.4}},{"id":"48fe5bfc-89c4-4408-b262-52900a562b12","brand":"Tesla","vehicle_type":"car","type":"bev","brand_id":"f37896c3-6bc5-45e1-b442-b9cbc38e3a7c","model":"Model Y","release_year":2020,"variant":"Performance","usable_battery_size":72.5,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs","tesla_suc","tesla_ccs"],"max_power":246,"charging_curve":[{"percentage":0,"power":246},{"percentage":35,"power":238},{"percentage":75,"power":99},{"percentage":100,"power":18}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":14.4}},{"id":"5b501d1c-6e2a-f409-efe9-9a53e405c4eb","brand":"Volkswagen","vehicle_type":"car","type":"phev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"Golf GTE","release_year":2020,"variant":"8","usable_battery_size":13,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":11.4}},{"id":"50baff44-fcbe-48ac-a7ae-7a5181d9bb8c","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"ID.4","release_year":2020,"variant":"77 kWh","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":30,"power":125},{"percentage":70,"power":65},{"percentage":80,"power":65},{"percentage":100,"power":22}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":19.3}},{"id":"cb995cc3-84d9-4c87-89dc-f9dee7a47156","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"ID.3","release_year":2020,"variant":"77 kWh","usable_battery_size":77,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":125,"charging_curve":[{"percentage":0,"power":125},{"percentage":30,"power":125},{"percentage":70,"power":65},{"percentage":80,"power":65},{"percentage":100,"power":22}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.1}},{"id":"0a7e79c1-ecd6-4639-bac1-9c9e49fec84c","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"ID.3","release_year":2020,"variant":"45 kWh","usable_battery_size":45,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":50,"charging_curve":[{"percentage":0,"power":47.5},{"percentage":75,"power":50},{"percentage":100,"power":7.2}],"is_default_charging_curve":true},"energy_consumption":{"average_consumption":16.4}},{"id":"d8044adf-2538-4d45-b2d8-2b2fd0951766","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"ID.3","release_year":2020,"variant":"58 kWh","usable_battery_size":58,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":100,"charging_curve":[{"percentage":0,"power":100},{"percentage":30,"power":100},{"percentage":70,"power":50},{"percentage":80,"power":50},{"percentage":100,"power":20}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.6}},{"id":"f1b46b0a-b101-4072-a246-0b52f0cc51f5","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-Golf","release_year":2014,"variant":"CCS","usable_battery_size":21.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["ccs"],"max_power":44,"charging_curve":[{"percentage":0,"power":40},{"percentage":76,"power":44},{"percentage":81,"power":25},{"percentage":93,"power":16},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.8}},{"id":"f0132135-9415-4403-818b-cee07f81ceb2","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-Golf","release_year":2017,"variant":"CCS","usable_battery_size":31.5,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":40,"charging_curve":[{"percentage":0,"power":39},{"percentage":60,"power":40},{"percentage":80,"power":37},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.4}},{"id":"bad55b90-4b4f-4760-83ea-fa96280e7310","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-Golf","release_year":2017,"variant":"","usable_battery_size":31.5,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":null,"energy_consumption":{"average_consumption":16.4}},{"id":"fda95cb7-d391-4344-851e-a1b5a548b42b","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-Golf","release_year":2014,"variant":"","usable_battery_size":21.2,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":15.8}},{"id":"3fc921eb-7a43-4b09-a819-73b9d5a5c14f","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-Golf","release_year":2020,"variant":"","usable_battery_size":31.5,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":40,"charging_curve":[{"percentage":0,"power":39},{"percentage":60,"power":40},{"percentage":80,"power":25},{"percentage":100,"power":6}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":15.3}},{"id":"a0347619-a7fe-4dd2-be4e-3ef615783481","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-up","release_year":2013,"variant":"CCS","usable_battery_size":16.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":{"ports":["ccs"],"max_power":44,"charging_curve":[{"percentage":0,"power":40},{"percentage":76,"power":44},{"percentage":81,"power":25},{"percentage":93,"power":16},{"percentage":100,"power":8}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.8}},{"id":"bcd8700d-241c-43a1-b9df-24ee310ea8e4","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-up","release_year":2013,"variant":"","usable_battery_size":16.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":16.8}},{"id":"57184038-ae77-4540-9367-ccb98beb8cc3","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-up","release_year":2020,"variant":"","usable_battery_size":32.3,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":null,"energy_consumption":{"average_consumption":16.6}},{"id":"15023eb9-eba6-436e-ad98-2086f1cb31c4","brand":"Volkswagen","vehicle_type":"car","type":"phev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"Golf GTE","release_year":2017,"variant":"","usable_battery_size":8.7,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":11.4}},{"id":"ec3b0af7-67c6-400d-b3c2-aa2f3be24c8a","brand":"Volkswagen","vehicle_type":"car","type":"phev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"Passat GTE","release_year":2019,"variant":"","usable_battery_size":13.1,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.2}},{"id":"fc5b3c94-c0eb-4515-af3d-4a4106ffe29f","brand":"Volkswagen","vehicle_type":"car","type":"bev","brand_id":"481793f5-c8b0-4dc9-b3d4-cc615085ac07","model":"e-up","release_year":2020,"variant":"CCS","usable_battery_size":32.3,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.2,"power_per_charging_point":{"11":7.2,"16":7.2,"22":7.2,"43":7.2,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.2}},"dc_charger":{"ports":["ccs"],"max_power":34,"charging_curve":[{"percentage":0,"power":32},{"percentage":27,"power":34},{"percentage":80,"power":14},{"percentage":100,"power":7}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":16.6}},{"id":"0aaf072a-2655-49ef-4aed-6f66a3caf8c7","brand":"Volvo","vehicle_type":"car","type":"phev","brand_id":"2e55ea02-c829-4256-94fd-ffc971a1dd8e","model":"XC40 PHEV","release_year":2019,"variant":"T5 Twin Engine","usable_battery_size":10.7,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":16.1}},{"id":"ac812f08-3c8a-4af5-a07a-b520ec9e16cc","brand":"Volvo","vehicle_type":"car","type":"phev","brand_id":"2e55ea02-c829-4256-94fd-ffc971a1dd8e","model":"XC 60 T8","release_year":2018,"variant":"","usable_battery_size":10.4,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":24.5}},{"id":"a746d26e-2a73-4816-a0e4-a40bfb6ba7d7","brand":"Volvo","vehicle_type":"car","type":"bev","brand_id":"2e55ea02-c829-4256-94fd-ffc971a1dd8e","model":"XC40","release_year":2020,"variant":"P8 Recharge","usable_battery_size":75,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":11,"power_per_charging_point":{"11":11,"16":11,"22":11,"43":11,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":{"ports":["ccs"],"max_power":148,"charging_curve":[{"percentage":0,"power":148},{"percentage":35,"power":147},{"percentage":70,"power":98},{"percentage":85,"power":59},{"percentage":100,"power":10}],"is_default_charging_curve":false},"energy_consumption":{"average_consumption":17.6}},{"id":"5f67bab0-e79a-4f79-ae8d-5643b9379bba","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"S","release_year":2019,"variant":"ZF14.4 11 KW + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"f810b11d-d3c7-4c16-9841-4892b91052fa","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Standard + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":8.5}},{"id":"f370e122-e83f-4461-8f7f-42346fd3307a","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"S","release_year":2019,"variant":"ZF7.2 11 KW","usable_battery_size":6.3,"ac_charger":{"usable_phases":1,"ports":[],"max_power":1.3,"power_per_charging_point":{"11":1.3,"16":1.3,"22":1.3,"43":1.3,"2.0":1.3,"2.3":1.3,"3.7":1.3,"7.4":1.3}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"5e2257e3-2e02-435a-9fb4-3073af846043","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"S","release_year":2019,"variant":"ZF7.2 11 KW","usable_battery_size":6.3,"ac_charger":{"usable_phases":2,"ports":[],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"16380152-7d48-4e0e-9b65-f3ec4242796d","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"S","release_year":2019,"variant":"ZF14.4 11 KW","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"6bbab829-06e6-4180-b01c-b31abeffca9c","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR","release_year":2019,"variant":"ZF 14.4 + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":7}},{"id":"dadf8cec-aad9-4d93-b49e-418c3242ac97","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"S","release_year":2019,"variant":"ZF14.4 11 KW + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.6}},{"id":"40e01ce8-1475-4b38-b62f-2d91009f77b5","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR","release_year":2019,"variant":"ZF 14.4","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":7}},{"id":"900a4767-ca7e-4b26-82f1-810de98d7bdd","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Standard + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":9.7,"power_per_charging_point":{"11":7.4,"16":9.7,"22":9.7,"43":9.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"b8e01c64-6751-42ec-b894-06c06609876c","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Standard","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"27515928-e18b-4f6d-8414-b7248bccd929","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR","release_year":2019,"variant":"ZF 14.4 + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":7.2}},{"id":"43765332-045e-42f6-8e32-e73ab1f54ba1","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Standard + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":8.5}},{"id":"847b6828-575a-41c6-82ea-07292186dd9b","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Premium","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":6,"power_per_charging_point":{"11":6,"16":6,"22":6,"43":6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"2802c16b-e3a9-491f-83cb-50059216c495","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Standard + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":9.7,"power_per_charging_point":{"11":7.4,"16":9.7,"22":9.7,"43":9.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"8bdda912-afd5-46ce-bf4c-6bdf4e2bc9d4","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DS","release_year":2019,"variant":"ZF14.4 11 KW + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":7}},{"id":"dc945e47-3cfb-476c-9976-6771d21f8e16","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Premium + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":12,"power_per_charging_point":{"11":11.1,"16":12,"22":12,"43":12,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"68057277-d06f-4c87-a7bd-e9cebd8c52c1","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/F","release_year":2019,"variant":"Premium + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":6,"power_per_charging_point":{"11":6,"16":6,"22":6,"43":6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6}},"dc_charger":null,"energy_consumption":{"average_consumption":8.5}},{"id":"9173a0f2-190c-4397-963e-25dbf89e398b","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Standard","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"49d41944-7bc9-4eeb-b952-ec4cc8173fb3","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Premium","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":6,"power_per_charging_point":{"11":6,"16":6,"22":6,"43":6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"79dbcf78-fdf5-4e80-9563-35efde72094b","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR","release_year":2019,"variant":"ZF 14.4 + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":7.4}},{"id":"f12c671b-90c1-44f3-bd13-bd67b58a9491","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DS","release_year":2019,"variant":"ZF14.4 11 KW + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":6.6}},{"id":"75fb9972-a211-460e-b909-ec3daa9942f2","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR","release_year":2019,"variant":"ZF 14.4","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":[],"max_power":1.3,"power_per_charging_point":{"11":1.3,"16":1.3,"22":1.3,"43":1.3,"2.0":1.3,"2.3":1.3,"3.7":1.3,"7.4":1.3}},"dc_charger":null,"energy_consumption":{"average_consumption":7.4}},{"id":"62af9d98-b361-44f6-bcab-ea2c01f0ea98","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Premium + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":12,"power_per_charging_point":{"11":11.1,"16":12,"22":12,"43":12,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":8}},{"id":"d50e4d30-8737-4585-abb1-237339c4a798","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"SR/S","release_year":2020,"variant":"Premium + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":6,"power_per_charging_point":{"11":6,"16":6,"22":6,"43":6,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":6}},"dc_charger":null,"energy_consumption":{"average_consumption":8.5}},{"id":"561fc8d5-547d-4461-8793-43b699ae5fd1","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DS","release_year":2019,"variant":"ZF14.4 11 KW","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":[],"max_power":3.7,"power_per_charging_point":{"11":3.7,"16":3.7,"22":3.7,"43":3.7,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":3.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.6}},{"id":"0c2cf617-5f38-4d12-baa4-66b1987f132c","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR","release_year":2019,"variant":"ZF 14.4 + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":[],"max_power":1.3,"power_per_charging_point":{"11":1.3,"16":1.3,"22":1.3,"43":1.3,"2.0":1.3,"2.3":1.3,"3.7":1.3,"7.4":1.3}},"dc_charger":null,"energy_consumption":{"average_consumption":7.8}},{"id":"5d30765a-5db4-40ed-a2c9-e7b29c845d72","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR/BF","release_year":2019,"variant":"ZF 14.4","usable_battery_size":12.6,"ac_charger":{"usable_phases":1,"ports":[],"max_power":1.3,"power_per_charging_point":{"11":1.3,"16":1.3,"22":1.3,"43":1.3,"2.0":1.3,"2.3":1.3,"3.7":1.3,"7.4":1.3}},"dc_charger":null,"energy_consumption":{"average_consumption":8.8}},{"id":"f9efd902-4515-4253-b42f-1a306507d046","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR/BF","release_year":2019,"variant":"ZF 14.4 + Power Tank","usable_battery_size":15.8,"ac_charger":{"usable_phases":1,"ports":[],"max_power":1.3,"power_per_charging_point":{"11":1.3,"16":1.3,"22":1.3,"43":1.3,"2.0":1.3,"2.3":1.3,"3.7":1.3,"7.4":1.3}},"dc_charger":null,"energy_consumption":{"average_consumption":8.8}},{"id":"8cdf727d-051f-4f72-8cf7-a1d2c101b0b8","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"FXS","release_year":2019,"variant":"ZF7.2","usable_battery_size":6.3,"ac_charger":{"usable_phases":1,"ports":[],"max_power":0.65,"power_per_charging_point":{"11":0.7,"16":0.7,"22":0.7,"43":0.7,"2.0":0.7,"2.3":0.7,"3.7":0.7,"7.4":0.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"670ca5a8-af25-44b8-b50a-708500daf37a","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"DSR/BF","release_year":2019,"variant":"ZF 14.4 + Charge Tank","usable_battery_size":12.6,"ac_charger":{"usable_phases":2,"ports":["type2"],"max_power":7.3,"power_per_charging_point":{"11":7.3,"16":7.3,"22":7.3,"43":7.3,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.3}},"dc_charger":null,"energy_consumption":{"average_consumption":8.8}},{"id":"77eec6a3-c38b-4160-90a8-5853bd32bb88","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"FX","release_year":2019,"variant":"ZF7.2","usable_battery_size":6.3,"ac_charger":{"usable_phases":1,"ports":[],"max_power":0.65,"power_per_charging_point":{"11":0.7,"16":0.7,"22":0.7,"43":0.7,"2.0":0.7,"2.3":0.7,"3.7":0.7,"7.4":0.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"de056455-33b5-45db-8aaf-03fea1f98ab0","brand":"Zero Motorcycles","vehicle_type":"motorbike","type":"bev","brand_id":"5686f8db-6a36-41e7-a78c-fbf957ca103a","model":"FXS","release_year":2019,"variant":"ZF7.2 11KW","usable_battery_size":6.3,"ac_charger":{"usable_phases":1,"ports":[],"max_power":0.65,"power_per_charging_point":{"11":0.7,"16":0.7,"22":0.7,"43":0.7,"2.0":0.7,"2.3":0.7,"3.7":0.7,"7.4":0.7}},"dc_charger":null,"energy_consumption":{"average_consumption":6.3}},{"id":"98aacbc9-5a97-4fe4-abcf-4f7bb2910a9f","brand":"e.GO Mobile","vehicle_type":"car","type":"bev","brand_id":"771bb157-23a2-4917-908c-810d241718d5","model":"Life 60","release_year":2019,"variant":"","usable_battery_size":21,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":15.5}},{"id":"4f408d10-82c3-4850-ae2b-141f21d745b3","brand":"e.GO Mobile","vehicle_type":"car","type":"bev","brand_id":"771bb157-23a2-4917-908c-810d241718d5","model":"Life 40","release_year":2019,"variant":"","usable_battery_size":17.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":15.5}},{"id":"975b064b-626e-4318-b60c-3ce0729743fd","brand":"e.GO Mobile","vehicle_type":"car","type":"bev","brand_id":"771bb157-23a2-4917-908c-810d241718d5","model":"Life 20","release_year":2019,"variant":"","usable_battery_size":14.5,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":15.5}},{"id":"e3525b59-d3b9-4eef-9a01-1408358c5534","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"fortwo ED","release_year":null,"variant":"22 kW-AC","usable_battery_size":17.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.7}},{"id":"1d43c981-02be-4d41-a34b-65a40ff25f7b","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"fortwo EQ","release_year":null,"variant":"","usable_battery_size":17.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":16.7}},{"id":"f0b185de-9b9d-4a08-924f-450c4dadc7a6","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"fortwo EQ","release_year":null,"variant":"22 kW-AC","usable_battery_size":17.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":16.7}},{"id":"785c65be-3122-44ad-b574-9291c0793c37","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"fortwo ED","release_year":null,"variant":"","usable_battery_size":17.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":16.7}},{"id":"6a3a76f6-a0d0-41ff-afc9-5ad2f0879b4d","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"forfour EQ","release_year":null,"variant":"","usable_battery_size":17.6,"ac_charger":{"usable_phases":1,"ports":["type2"],"max_power":3.6,"power_per_charging_point":{"11":3.6,"16":3.6,"22":3.6,"43":3.6,"2.0":2,"2.3":2.3,"3.7":3.6,"7.4":3.6}},"dc_charger":null,"energy_consumption":{"average_consumption":17.6}},{"id":"805b5810-074c-449b-ad19-d6c852ebf8f6","brand":"smart","vehicle_type":"car","type":"bev","brand_id":"a462c115-33b4-438b-b590-bc4a33382d1c","model":"forfour EQ","release_year":null,"variant":"22 kW-AC","usable_battery_size":17.6,"ac_charger":{"usable_phases":3,"ports":["type2"],"max_power":22,"power_per_charging_point":{"11":11.1,"16":16.2,"22":22,"43":22,"2.0":2,"2.3":2.3,"3.7":3.7,"7.4":7.4}},"dc_charger":null,"energy_consumption":{"average_consumption":17.6}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,669], () => (__webpack_exec__(7841)));
module.exports = __webpack_exports__;

})();