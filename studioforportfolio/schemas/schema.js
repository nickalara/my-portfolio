// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
//don't need category
//import category from './category'
// // removed posts from site.
// import post from './post';
import author from './author';

//adding project to schema
import project from './project'

// adding education to schema
import education from './education';

//adding work history to schema
import workHistory from './workHistory';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    //post,
    author,
    //removing category
    //category,
    //adding project
    project,
    //adding education
    education,
    //adding work history
    workHistory,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
