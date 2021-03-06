/**
 * Traducción de librería Bootstrap Table a Español (Chile)
 * @author Brian Álvarez Azócar
 * email brianalvarezazocar@gmail.com
 */

$.fn.bootstrapTable.locales['es-CL'] = {
  formatLoadingMessage () {
    return 'Cargando, espere por favor'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} filas por p\u00E1gina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas (filtered from ${totalNotFiltered} total rows)`
    }

    return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Limpiar búsqueda'
  },
  formatSearch () {
    return 'Buscar'
  },
  formatNoMatches () {
    return 'No se encontraron registros'
  },
  formatPaginationSwitch () {
    return 'Ocultar/Mostrar paginaci\u00F3n'
  },
  formatRefresh () {
    return 'Refrescar'
  },
  formatToggle () {
    return 'Cambiar'
  },
  formatColumns () {
    return 'Columnas'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Todo'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL'])
