// {
//     let user: string = "123";
//     // user = 123;
//     console.log(user);

// }
// định nghĩa kiểu dữ liệu của biến
// [từ khóa] [tên biến]:[kiểu dữ liệu] = [giá trị];


// function sum(a: number, b: number): any {
//     let result = a + b
//     console.log(result);
//     return result;
// }
// sum(4, 5)
/*
    định nghĩa kiểu dữ liệu của tham số truyền vào hàm
        Ví dụ: function sum(a: number, b: number)
    định nghĩa kiểu dữ liệu trả về của hàm
        Ví dụ: function sum(a: number, b: number): any
        - nếu hàm không trả về dữ liệu (không return) thì sẽ dùng kiểu void
        - nếu hàm trả về dữ liệu gì cũng được thì sẽ dùng any
        - nếu hàm trả về dữ liệu theo 1 kiểu xác định thì sẽ nhận kiểu dữ liệu đó khi khởi tạo
*/
/*
    điểm lab, điểm quiz, điểm assignment , điểm thi 
    điểm có kiểu dữ liệu là number
    Output:
    log ra các đầu điểm
    tạo 1 hàm tính và hiển thị tổng điểm thành phần
    hàm truyền vào 4 tham số là 4 đầu điểm bên trên
    hàm không có kiểu dữ liệu trả về
    Thực hiện kiểm tra:
        Nếu tổng điểm nhỏ hơn 20 thì hiển thị thông báo "Bạn đã trượt môn "
        Nếu tổng điểm lớn hơn hoặc bằng 20 thì hiển thị thông báo " Bạn đã qua môn "
*/

{
    interface Person {
        id: number,
        username?: string
    }
    const user: Person = {
        id: 1,
        username: "234"
    }

    interface Employee extends Person {
        readonly email: string
    }
    const employee: Employee = {
        id: 2,
        email: "sontv@gmail.com"
    }
    employee.email = "thienth@gmail.com"

}