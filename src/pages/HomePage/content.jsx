import React from 'react';
import DisplayControl from '../../components/DisplayControl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import LeasesGrid from '../../components/LeasesGrid';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import DeletePopup from '../../components/DeletePopup';
import FormDrawer from '../../components/FormDrawer';
import InputField from '../../components/InputField';
import Dropdown from '../../components/Dropdown';
import PrimaryButton from '../../components/PrimaryButton';
import ClientsProvider from '../../context/ClientsContext';
import LeasesProvider from '../../context/LeasesContext';
import MoviesProvider from '../../context/MoviesContext';

export default function HomePageContent({
  setFormDrawerIsVisible,
  filterLeases,
  sortLeases,
  leases,
  updateLeases,
  updateClients,
  updateMovies,
  handleDeleteLease,
  deletePopupIsVisible,
  deleteFunction,
  hidePopup,
  formDrawerIsVisible,
  closeFormDrawer,
  setLeaseDate,
  leaseDate,
  setReturnDate,
  returnDate,
  clientOptionList,
  setSelectedClient,
  selectedClient,
  movieOptionList,
  setSelectedMovie,
  selectedMovie,
  handleFormSubmit,
  formDrawerTitle,
  sortOptions,
  filterOptions
}) {
  return (
    <React.Fragment>
      <LeasesProvider>
        <ClientsProvider>
          <MoviesProvider>
            <Header />
            
            <ContentWrapper>
              <HeroSection onClick={() => setFormDrawerIsVisible(true)} />

              <DisplayControl
                title="Todas as locações"
                sortOptions={sortOptions.leaseOptions}
                filterOptions={filterOptions.leaseOptions}
                filterFunction={filterLeases}
                sortFunction={sortLeases}
              />

              <LeasesGrid
                manipulatedLeases={leases}
                updateLeases={updateLeases}
                updateClients={updateClients}
                updateMovies={updateMovies}
                showPopup={handleDeleteLease}
              />
            </ContentWrapper>

            <DeletePopup
              message="Tem certeza que deseja excluir permanentemente essa locação?"
              visible={deletePopupIsVisible}
              deleteFunction={deleteFunction}
              cancelFunction={hidePopup}
            />

            <FormDrawer
              visible={formDrawerIsVisible}
              title={formDrawerTitle}
              close={closeFormDrawer}
            >
              <InputField
                label="Data de locação"
                type="date"
                onChange={setLeaseDate}
                value={leaseDate}
              />

              <InputField
                label="Data de devolução"
                type="date"
                onChange={setReturnDate}
                value={returnDate}
              />

              <Dropdown
                options={clientOptionList}
                big
                label="Cliente"
                onChange={setSelectedClient}
                value={selectedClient}
              />

              <Dropdown
                options={movieOptionList}
                big
                label="Filme"
                onChange={setSelectedMovie}
                value={selectedMovie}
              />

              <PrimaryButton onClick={handleFormSubmit}>
                {formDrawerTitle}
              </PrimaryButton>
            </FormDrawer>
          </MoviesProvider>
        </ClientsProvider>
      </LeasesProvider>
    </React.Fragment>
  );
}
