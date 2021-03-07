import styled from 'styled-components'

//
// general
export const PageTitle = styled.h2``

//
// AlbumsList
export const AlbumListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`

export const AlbumContainer = styled.div`
  border: 1px solid #20B2AA;
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover{
    background-color: #20B2AA;
    color: white;
  }
`

//
// AlbumDetail
export const AlbumDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PhotoContainer = styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid #20B2AA;
  cursor: pointer;

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