# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

flats = Flat.create([
                { city: 'Barcelona', description: 'Beautiful aparment in the best area', price: '500.000€', m2: '100 m2', rooms: '4', bathrooms: '3', photo: 'https://source.unsplash.com/collection/2283835/800x600'},
                { city: 'Barcelona', description: 'Modern attic near the beach', price: '650.500€', m2: '110 m2', rooms: '2', bathrooms: '2', photo: 'https://source.unsplash.com/collection/3182154/800x600'},
                { city: 'Madrid', description: 'Family aparment', price: '350.000€', m2: '250 m2', rooms: '3', bathrooms: '2', photo: 'https://source.unsplash.com/collection/8753757/800x600'},
                { city: 'Bilbao', description: 'Classic home in downtwon area', price: '450.000€', m2: '130 m2', rooms: '5', bathrooms: '3', photo: 'https://source.unsplash.com/collection/4901690/800x600'},
                { city: 'Valencia', description: 'Wonderful loft near the stadium ', price: '250.000€', m2: '90 m2', rooms: '1', bathrooms: '1', photo: 'https://source.unsplash.com/collection/1118894/800x600'}
])