package main
import "fmt"
const (
    a = iota
    b
    c
)

func main() {
    var i, j int
    fmt.Println(&i == &i, &i == &j, &j == nil)
    fmt.Println(a, b, c)
}
