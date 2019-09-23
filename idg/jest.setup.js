require(`@testing-library/jest-dom/extend-expect`)
// Mocking this because it uses graphql and writes to head
jest.mock('./src/components/seo')
