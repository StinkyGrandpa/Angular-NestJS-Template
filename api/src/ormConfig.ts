import { TypeOrmModuleOptions } from '@nestjs/typeorm';



export const config: TypeOrmModuleOptions = {
	type: "mariadb",
	database: "",
	entities: [
		"dist/**/*.entity{.ts,.js}"
	],
	synchronize: true, //only for Debug or it will completly wrap the Database on each change
	host: "",
	port: 1,
	username: "",
	password: "",
	//logging: true
}