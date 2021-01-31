export const Age = () => {
    let age = +prompt("Please write your age");

    return (
        <span className="age">
            {age ? "You are young" : "You have a strange age"}
        </span>
    )
}