import * as test from "node:test";

// export class Course{
//     pages = []
//
//     constructor(subject, season, year){
//         this.subject = subject
//         this.season = season
//         this.year = year
//     }
// }
//
// export class Page{
//     constructor(title, content){
//         this.title = title
//         this.content = content
//     }
// }
//
// export class User{
//     constructor(email, name, password) {
//         this.email = email
//         this.name = name
//         this.password = password
//     }
// }
//
// const test_user = new User('testuser@gmail.com', 'Test User', 'password')
//
// const course_science = new Course("Science", "Fall", 2023)
// course_science.pages = [
//     new Page("States of Matter", "All matter, whether it's water, plastic, wood or whatever else, can exist in one of three different states. The first is Solid, meaning the the material is rigid and hard. The second is liquid, meaning the atoms can flow around and disperse, like water. The third is gaseous, meaning the material becomes wispy and not very dense, gasses flow a bit like liquids do."),
//     new Page("Acidity", "All materials have a certain number of hydrogen ions (H+) or hydroxyl ions (OH-) at any given time. It is measured by pH, low pH means more acidic, and high pH means more basic. It goes from 0 (Acid) to 14 (Base) with 7 being considered the natural pH level, which is also the pH level of natural water.")
// ]
//
// const course_math = new Course("Mathematics", "Fall", 2023)
// course_math.pages = [
//     new Page("Arithmetic", "Arithmetic is the math of counting: adding and subtracting. Multiplication, Division, Exponents and Square roots are simply combinations of addition or subtraction at their core."),
//     new Page("Geometry", "In Geometry, the goal is to find out the shape and dimensions of any object with width, height or depth, also known as X, Y and Z. Generally it is used for 2D (X and Y) or 3D (X, Y and Z) calculations, but it is also used for special objects that are 4D (X,Y,Z and W). We live in the 3rd dimension so we can only imagine 4D things with mathematics. This is also true with 2D objects, but we can also visualize them on flat surfaces like digital screens or paper."),
//     new Page("Graphing", "The sole point of graphs is to visualize some kind of data or formula, using lines, dots, bars or whatever else."),
//     new Page("Proofing", "In Proofing, the goal is to show a formula or statement is true or false, such as: 'All even numbers squared produce another even number'. With some base assumptions, you can rephrase any term, it seems impossible at first, but makes sense when you get to understand the process.")
// ]
//
// const course_programming = new Course("Programming", "Fall", 2023)
// course_programming.pages = [
//     new Page("Logic", "Logic is immensely powerful, it builds statements using things known as 'Logic Gates' which comprise of only: AND, OR and NOT. We use logic gates in programming for everything from calculators to video games."),
//     new Page("Hardware", "All software runs on a physical machine, known as the 'hardware'. In general computers, the components are: First, the CPU. The CPU or Central Processing Unit is responsible for completing instructions using the basic calculations ADD SUBTRACT DIVIDE and MULTIPLY, represented in most programming languages as +, -, / and *. The power of a CPU can be boiled down to how many calculations it can process per second, measure in Hertz. Most modern PCs have at least 1 GHz, which is 1 Billion hertz. Second, the RAM. RAM stands for Random Access Memory, which is a completely literal name. Any program running on your computer will need to constantly use ram temporarily. RAM is volatile memory, meaning anything stored on it will be lost as soon as it loses power. Third, the GPU. The GPU does the same thing as the CPU, only it is specifically for graphics, hence the name Graphics Processing Unit. Fourth, the dedicated storage. You might be familiar with the three types of storage computers generally use, that being HDDs and Flash memory. HDDs or Hard Disk Drives, use spinning disks that a laser can write or read from. Since they are mechanical, they wear down and break faster than other storage types. Flash memory doesn't have moving parts and instead use only electric gates. This allows them to last longer and less likely to break. Flash can also be called Solid State, and Solid State Drives use flash memory. Fifth, the Motherboard. This long thin board has what all of the other components attach to. It's like a small city, where each component is a building dedicated to a specific task. Computers can't be used without input though, so a kind of technical sixth component is keyboards. Every desktop computer can be used completely without the mouse, using only the keyboard. Other technical component would be the fans. This is because the CPU and GPU both use a lot of energy, and therefore generate a lot of heat, which has to be removed or the parts will overheat and break."),
//     new Page("Programming languages", "You can't just talk to a computer and make it do things, but that's what programming languages are for. The hardware of a computer only understands Machine Code, so everything else is secretly just Machine Code at the core. Hardware is controlled directly by 'Bits' which simply mean something that represents an On or Off value. Modern bits are electric, but they used to be mechanical. Binary is the number base that contains only 0 and 1, which is what 'Bi' means, two. The number 1 in binary is 1, but the number 2 is 10 - not 'ten' but 'one-zero', likewise 3 is 11, 4 101, 5 110, 6 1001, 1010, etc.  Second, is Machine Code. Machine code is the first level, being a representation of things using generally Binary or Hexadecimal. Hexadecimal is also a number base, but it has 16 characters instead of 2, or 10. (Fun fact, 10 characters is known as the Decimal base, or Base 10. Which is the system we use for counting in math). Hexadecimal uses 0-9 like the usual Decimal base, but also has A,B,C,D,E and F to use. So while binary makes numbers longer, hexadecimal makes them shorter. Like how 16 is just F, or 255 is just FF. You can't easily see the binary value of anything, instead you look at the hexadecimal value. Third is Assembly code. Assembly is more abstracted and uses three letter shorthand to represent instructions. Forth, low level languages. These languages such as C, are closer to the hardware than other languages but are much higher level than assembly. Fifth and final, High level languages. These are the modern languages that don't touch hardware directly at all, and are the easiest to understand and write, such as Javascript, C# or Python. In the old days, programs were written in assembly, for processor like the 6502, which the nintendo entertainment system used.")
// ]

export var default_state = {
    courses: [],
    users: [],
    course: 0,
    page: 0,
    user: 0,
    all_data: null,
    show_login_form: false
}