import PermissionType from "./PermissionType";

interface DataBaseItem{
    email: string;
    password: string;
    permission: PermissionType
}

const DataBase: DataBaseItem[] = [
    {
        email: "master@codesolutis.com.br",
        password: "123456",
        permission: PermissionType.ADMIN
    },
    {
        email: "user@codesolutis.com.br",
        password: "u53rp@ass",
        permission: PermissionType.USER
    }, 

]

export default DataBase;