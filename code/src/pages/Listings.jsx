import React from 'react'
import estateData from '../data/estate-data'
import PropertyCard from '../components/PropertyCard'

const Listings = () => {

    React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className='max-w-screen-xl mx-auto px-2 py-8 pt-25 min-h-screen'>
      <h1 className='text-5xl font-bold mb-4 text-main text-center'>Properties Listings</h1>
        <div className='grid grid-cols-1 max-w-screen-xl mx-auto sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
          {
            estateData.map((property) => (
             <PropertyCard key={property.id} property={property} />
            ))
          }
        </div>
    </div>
  )
}

export default Listings