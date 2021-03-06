import React, { useContext } from 'react'
// import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import CollectionsContext from '../../contexts/collections/collections.context' // Context API

// import { selectCollection } from '../../redux/shop/shop.selectors' - Redux

import './collection.styles.scss'

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext)
  const collection = collections[match.params.collectionId]

  const { title, items } = collection
  return(
  <div className="collection-page">
    <h2 className="title"> {title} </h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
)}

export default CollectionPage

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// })

// export default connect(mapStateToProps)(CollectionPage)