export default class Token{

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkYXB0ZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.gnF3Az8vOdj0qA3nRkYl8ZrlKxc18lrKjMhJSNHHuW4'

    getToken(): string {
        return this.token
    }
}