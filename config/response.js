const { response } = require("express");

response_data = {
	ok: (values, res, message) => {
		let data = {
			success: true,
			status: 200,
			data: values,
			message,
		}
		res.json(data);
		res.end();
	},
	back: (code, values, message) => {
		let data = {
			status: code,
			data: values,
			message,
		}
		return data;
	},
	success: (values, res, message) => {
		let data = {
			success: true,
			status: 201,
			data: values,
			message,
		}
		res.json(data);
		res.end();
	},
	error: (errcode, message, res, err) => {
		let data = {
			success: false,
			status: errcode,
			message,
			err,
		}
		res.json(data);
		res.end();
	},
	done: (message, res, token) => {
		var data = {
			success: true,
			status: 200,
			message: message,
			token: token

		}
		res.json(data);
		res.end();
	}
}

module.exports = response_data;
