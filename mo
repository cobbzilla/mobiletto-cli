#!/bin/sh
SCRIPT_DIR="$(cd "$(dirname "${0}")" && pwd)"
TARGET_SCRIPT="$(readlink "${0}")"
if [ -n "${TARGET_SCRIPT}" ] ; then
  exec "${SCRIPT_DIR}"/"${TARGET_SCRIPT}" "$@" || exit 1
else
  cd "${SCRIPT_DIR}" || exit 1
fi

exec 3>&1
yarn -s run mo "$@" 2>&1 >&3 3>&- | grep -v 'No license field' 3>&-
exec 3>&-
