import styled from 'styled-components'

//
// general
export const PageTitle = styled.h2`
  margin: 10px 0 20px 10px;
`

//
// AlbumsList
export const AlbumList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 0;
`

export const AlbumItem = styled.li`
  border: 1px solid #20B2AA;
  margin: 10px;
  cursor: pointer;
  list-style: none;

  &:hover{
    background-color: #20B2AA;
    color: white;

    a {
      color: white;
    }
  }

  a {
    line-height: 40px;
    padding: 10px;
    color: #20B2AA;
  }
`

//
// AlbumDetail
export const AlbumPhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

export const PhotoItem = styled.li`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid #20B2AA;
  cursor: pointer;
  list-style: none;

  &:hover{
    background-color: #20B2AA;
    color: white;
    h3 {
      color: white
    }
  }
`

export const PhotoTitle = styled.h3`
  color: #20B2AA;
`

export const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin: 0 0 10px 10px;
`

//
// breadcrumbs
export const Breadcrumb = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0 0 0 10px;
`

export const BreadcrumbItem = styled.li`
  list-style: none;

  ::after {
    content: ">";
    margin: 0 10px;
  }

  :last-child {
    ::after {
      content: ''
    }
  }
`